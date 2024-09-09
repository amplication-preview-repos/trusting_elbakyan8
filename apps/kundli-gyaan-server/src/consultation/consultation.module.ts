import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConsultationModuleBase } from "./base/consultation.module.base";
import { ConsultationService } from "./consultation.service";
import { ConsultationController } from "./consultation.controller";
import { ConsultationResolver } from "./consultation.resolver";

@Module({
  imports: [ConsultationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConsultationController],
  providers: [ConsultationService, ConsultationResolver],
  exports: [ConsultationService],
})
export class ConsultationModule {}
