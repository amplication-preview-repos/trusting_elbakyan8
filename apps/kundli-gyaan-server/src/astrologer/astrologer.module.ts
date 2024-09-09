import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AstrologerModuleBase } from "./base/astrologer.module.base";
import { AstrologerService } from "./astrologer.service";
import { AstrologerController } from "./astrologer.controller";
import { AstrologerResolver } from "./astrologer.resolver";

@Module({
  imports: [AstrologerModuleBase, forwardRef(() => AuthModule)],
  controllers: [AstrologerController],
  providers: [AstrologerService, AstrologerResolver],
  exports: [AstrologerService],
})
export class AstrologerModule {}
