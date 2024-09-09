import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type KundliWhereInput = {
  details?: JsonFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
