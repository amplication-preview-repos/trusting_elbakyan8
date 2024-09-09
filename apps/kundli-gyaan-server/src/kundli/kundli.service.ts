import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KundliServiceBase } from "./base/kundli.service.base";

@Injectable()
export class KundliService extends KundliServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
