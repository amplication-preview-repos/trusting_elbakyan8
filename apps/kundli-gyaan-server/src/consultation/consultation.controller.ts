import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConsultationService } from "./consultation.service";
import { ConsultationControllerBase } from "./base/consultation.controller.base";

@swagger.ApiTags("consultations")
@common.Controller("consultations")
export class ConsultationController extends ConsultationControllerBase {
  constructor(
    protected readonly service: ConsultationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
