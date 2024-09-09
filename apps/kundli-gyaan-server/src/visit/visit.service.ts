import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisitServiceBase } from "./base/visit.service.base";

@Injectable()
export class VisitService extends VisitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
