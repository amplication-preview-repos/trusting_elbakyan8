import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsultationServiceBase } from "./base/consultation.service.base";

@Injectable()
export class ConsultationService extends ConsultationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
