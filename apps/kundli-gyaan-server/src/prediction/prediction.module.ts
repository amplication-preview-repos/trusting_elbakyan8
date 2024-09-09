import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PredictionModuleBase } from "./base/prediction.module.base";
import { PredictionService } from "./prediction.service";
import { PredictionController } from "./prediction.controller";
import { PredictionResolver } from "./prediction.resolver";

@Module({
  imports: [PredictionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PredictionController],
  providers: [PredictionService, PredictionResolver],
  exports: [PredictionService],
})
export class PredictionModule {}
