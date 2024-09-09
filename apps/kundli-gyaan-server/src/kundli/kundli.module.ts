import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KundliModuleBase } from "./base/kundli.module.base";
import { KundliService } from "./kundli.service";
import { KundliController } from "./kundli.controller";
import { KundliResolver } from "./kundli.resolver";

@Module({
  imports: [KundliModuleBase, forwardRef(() => AuthModule)],
  controllers: [KundliController],
  providers: [KundliService, KundliResolver],
  exports: [KundliService],
})
export class KundliModule {}
