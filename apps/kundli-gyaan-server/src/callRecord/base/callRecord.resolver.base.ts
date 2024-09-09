/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CallRecord } from "./CallRecord";
import { CallRecordCountArgs } from "./CallRecordCountArgs";
import { CallRecordFindManyArgs } from "./CallRecordFindManyArgs";
import { CallRecordFindUniqueArgs } from "./CallRecordFindUniqueArgs";
import { CreateCallRecordArgs } from "./CreateCallRecordArgs";
import { UpdateCallRecordArgs } from "./UpdateCallRecordArgs";
import { DeleteCallRecordArgs } from "./DeleteCallRecordArgs";
import { Astrologer } from "../../astrologer/base/Astrologer";
import { User } from "../../user/base/User";
import { CallRecordService } from "../callRecord.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CallRecord)
export class CallRecordResolverBase {
  constructor(
    protected readonly service: CallRecordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CallRecord",
    action: "read",
    possession: "any",
  })
  async _callRecordsMeta(
    @graphql.Args() args: CallRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CallRecord])
  @nestAccessControl.UseRoles({
    resource: "CallRecord",
    action: "read",
    possession: "any",
  })
  async callRecords(
    @graphql.Args() args: CallRecordFindManyArgs
  ): Promise<CallRecord[]> {
    return this.service.callRecords(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CallRecord, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CallRecord",
    action: "read",
    possession: "own",
  })
  async callRecord(
    @graphql.Args() args: CallRecordFindUniqueArgs
  ): Promise<CallRecord | null> {
    const result = await this.service.callRecord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CallRecord)
  @nestAccessControl.UseRoles({
    resource: "CallRecord",
    action: "create",
    possession: "any",
  })
  async createCallRecord(
    @graphql.Args() args: CreateCallRecordArgs
  ): Promise<CallRecord> {
    return await this.service.createCallRecord({
      ...args,
      data: {
        ...args.data,

        astrologer: args.data.astrologer
          ? {
              connect: args.data.astrologer,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CallRecord)
  @nestAccessControl.UseRoles({
    resource: "CallRecord",
    action: "update",
    possession: "any",
  })
  async updateCallRecord(
    @graphql.Args() args: UpdateCallRecordArgs
  ): Promise<CallRecord | null> {
    try {
      return await this.service.updateCallRecord({
        ...args,
        data: {
          ...args.data,

          astrologer: args.data.astrologer
            ? {
                connect: args.data.astrologer,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CallRecord)
  @nestAccessControl.UseRoles({
    resource: "CallRecord",
    action: "delete",
    possession: "any",
  })
  async deleteCallRecord(
    @graphql.Args() args: DeleteCallRecordArgs
  ): Promise<CallRecord | null> {
    try {
      return await this.service.deleteCallRecord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Astrologer, {
    nullable: true,
    name: "astrologer",
  })
  @nestAccessControl.UseRoles({
    resource: "Astrologer",
    action: "read",
    possession: "any",
  })
  async getAstrologer(
    @graphql.Parent() parent: CallRecord
  ): Promise<Astrologer | null> {
    const result = await this.service.getAstrologer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: CallRecord): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}