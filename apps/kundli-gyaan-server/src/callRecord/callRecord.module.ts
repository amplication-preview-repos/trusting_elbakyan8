import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CallRecordModuleBase } from "./base/callRecord.module.base";
import { CallRecordService } from "./callRecord.service";
import { CallRecordController } from "./callRecord.controller";
import { CallRecordResolver } from "./callRecord.resolver";

@Module({
  imports: [CallRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [CallRecordController],
  providers: [CallRecordService, CallRecordResolver],
  exports: [CallRecordService],
})
export class CallRecordModule {}
