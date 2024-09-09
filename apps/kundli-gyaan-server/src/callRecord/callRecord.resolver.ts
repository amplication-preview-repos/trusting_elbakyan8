import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CallRecordResolverBase } from "./base/callRecord.resolver.base";
import { CallRecord } from "./base/CallRecord";
import { CallRecordService } from "./callRecord.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CallRecord)
export class CallRecordResolver extends CallRecordResolverBase {
  constructor(
    protected readonly service: CallRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
