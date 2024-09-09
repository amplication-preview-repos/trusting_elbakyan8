import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type KundliCreateInput = {
  details?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
