import * as graphql from "@nestjs/graphql";
import { CallDataInput } from "../authModule/CallDataInput";
import { CallRecordOutput } from "../authModule/CallRecordOutput";
import { KundliDataInput } from "../authModule/KundliDataInput";
import { KundliOutput } from "../authModule/KundliOutput";
import { UserLoginInput } from "../authModule/UserLoginInput";
import { UserSignupInput } from "../authModule/UserSignupInput";
import { AuthModuleService } from "./authmodule.service";

export class AuthModuleResolver {
  constructor(protected readonly service: AuthModuleService) {}

  @graphql.Mutation(() => CallRecordOutput)
  async CreateCallRecord(
    @graphql.Args()
    args: CallDataInput
  ): Promise<CallRecordOutput> {
    return this.service.CreateCallRecord(args);
  }

  @graphql.Mutation(() => KundliOutput)
  async CreateKundli(
    @graphql.Args()
    args: KundliDataInput
  ): Promise<KundliOutput> {
    return this.service.CreateKundli(args);
  }

  @graphql.Query(() => CallRecordOutput)
  async GetCallRecord(
    @graphql.Args("args")
    args: string
  ): Promise<CallRecordOutput> {
    return this.service.GetCallRecord(args);
  }

  @graphql.Query(() => KundliOutput)
  async GetKundli(
    @graphql.Args("args")
    args: string
  ): Promise<KundliOutput> {
    return this.service.GetKundli(args);
  }

  @graphql.Mutation(() => String)
  async UserLogin(
    @graphql.Args()
    args: UserLoginInput
  ): Promise<string> {
    return this.service.UserLogin(args);
  }

  @graphql.Mutation(() => String)
  async UserSignup(
    @graphql.Args()
    args: UserSignupInput
  ): Promise<string> {
    return this.service.UserSignup(args);
  }
}
