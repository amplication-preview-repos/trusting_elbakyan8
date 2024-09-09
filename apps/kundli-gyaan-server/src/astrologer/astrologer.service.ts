import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AstrologerServiceBase } from "./base/astrologer.service.base";

@Injectable()
export class AstrologerService extends AstrologerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
