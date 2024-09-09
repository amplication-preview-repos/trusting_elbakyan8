import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CallRecordController } from "../callRecord.controller";
import { CallRecordService } from "../callRecord.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  callEnd: new Date(),
  callStart: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  callEnd: new Date(),
  callStart: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    callEnd: new Date(),
    callStart: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  callEnd: new Date(),
  callStart: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createCallRecord() {
    return CREATE_RESULT;
  },
  callRecords: () => FIND_MANY_RESULT,
  callRecord: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CallRecord", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CallRecordService,
          useValue: service,
        },
      ],
      controllers: [CallRecordController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /callRecords", async () => {
    await request(app.getHttpServer())
      .post("/callRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        callEnd: CREATE_RESULT.callEnd.toISOString(),
        callStart: CREATE_RESULT.callStart.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /callRecords", async () => {
    await request(app.getHttpServer())
      .get("/callRecords")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          callEnd: FIND_MANY_RESULT[0].callEnd.toISOString(),
          callStart: FIND_MANY_RESULT[0].callStart.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /callRecords/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/callRecords"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /callRecords/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/callRecords"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        callEnd: FIND_ONE_RESULT.callEnd.toISOString(),
        callStart: FIND_ONE_RESULT.callStart.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /callRecords existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/callRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        callEnd: CREATE_RESULT.callEnd.toISOString(),
        callStart: CREATE_RESULT.callStart.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/callRecords")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
