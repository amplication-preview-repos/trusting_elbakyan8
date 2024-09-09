import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisitModuleBase } from "./base/visit.module.base";
import { VisitService } from "./visit.service";
import { VisitController } from "./visit.controller";
import { VisitResolver } from "./visit.resolver";

@Module({
  imports: [VisitModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisitController],
  providers: [VisitService, VisitResolver],
  exports: [VisitService],
})
export class VisitModule {}
