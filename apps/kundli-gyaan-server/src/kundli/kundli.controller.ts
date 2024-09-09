import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KundliService } from "./kundli.service";
import { KundliControllerBase } from "./base/kundli.controller.base";

@swagger.ApiTags("kundlis")
@common.Controller("kundlis")
export class KundliController extends KundliControllerBase {
  constructor(
    protected readonly service: KundliService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
