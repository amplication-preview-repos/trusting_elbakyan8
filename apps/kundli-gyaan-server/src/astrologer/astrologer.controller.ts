import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AstrologerService } from "./astrologer.service";
import { AstrologerControllerBase } from "./base/astrologer.controller.base";

@swagger.ApiTags("astrologers")
@common.Controller("astrologers")
export class AstrologerController extends AstrologerControllerBase {
  constructor(
    protected readonly service: AstrologerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
