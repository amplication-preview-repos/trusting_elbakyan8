import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type KundliUpdateInput = {
  details?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
