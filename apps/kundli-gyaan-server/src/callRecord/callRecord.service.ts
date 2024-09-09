import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CallRecordServiceBase } from "./base/callRecord.service.base";

@Injectable()
export class CallRecordService extends CallRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
