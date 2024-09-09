import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthModuleService } from "./authmodule.service";
import { CallDataInput } from "../authModule/CallDataInput";
import { CallRecordOutput } from "../authModule/CallRecordOutput";
import { KundliDataInput } from "../authModule/KundliDataInput";
import { KundliOutput } from "../authModule/KundliOutput";
import { UserLoginInput } from "../authModule/UserLoginInput";
import { UserSignupInput } from "../authModule/UserSignupInput";

@swagger.ApiTags("authModules")
@common.Controller("authModules")
export class AuthModuleController {
  constructor(protected readonly service: AuthModuleService) {}

  @common.Post("/calls")
  @swagger.ApiOkResponse({
    type: CallRecordOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCallRecord(
    @common.Body()
    body: CallDataInput
  ): Promise<CallRecordOutput> {
        return this.service.CreateCallRecord(body);
      }

  @common.Post("/kundli")
  @swagger.ApiOkResponse({
    type: KundliOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateKundli(
    @common.Body()
    body: KundliDataInput
  ): Promise<KundliOutput> {
        return this.service.CreateKundli(body);
      }

  @common.Get("/calls/:id")
  @swagger.ApiOkResponse({
    type: CallRecordOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCallRecord(
    @common.Body()
    body: string
  ): Promise<CallRecordOutput> {
        return this.service.GetCallRecord(body);
      }

  @common.Get("/kundli/:id")
  @swagger.ApiOkResponse({
    type: KundliOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetKundli(
    @common.Body()
    body: string
  ): Promise<KundliOutput> {
        return this.service.GetKundli(body);
      }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserLogin(
    @common.Body()
    body: UserLoginInput
  ): Promise<string> {
        return this.service.UserLogin(body);
      }

  @common.Post("/signup")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserSignup(
    @common.Body()
    body: UserSignupInput
  ): Promise<string> {
        return this.service.UserSignup(body);
      }
}
