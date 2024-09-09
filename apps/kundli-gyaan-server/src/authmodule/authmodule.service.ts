import { Injectable } from "@nestjs/common";
import { CallDataInput } from "../authModule/CallDataInput";
import { CallRecordOutput } from "../authModule/CallRecordOutput";
import { KundliDataInput } from "../authModule/KundliDataInput";
import { KundliOutput } from "../authModule/KundliOutput";
import { UserLoginInput } from "../authModule/UserLoginInput";
import { UserSignupInput } from "../authModule/UserSignupInput";

@Injectable()
export class AuthModuleService {
  constructor() {}
  async CreateCallRecord(args: CallDataInput): Promise<CallRecordOutput> {
    throw new Error("Not implemented");
  }
  async CreateKundli(args: KundliDataInput): Promise<KundliOutput> {
    throw new Error("Not implemented");
  }
  async GetCallRecord(args: string): Promise<CallRecordOutput> {
    throw new Error("Not implemented");
  }
  async GetKundli(args: string): Promise<KundliOutput> {
    throw new Error("Not implemented");
  }
  async UserLogin(args: UserLoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UserSignup(args: UserSignupInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
