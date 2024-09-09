import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VisitWhereInput = {
  id?: StringFilter;
  serviceRequested?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  visitDate?: DateTimeNullableFilter;
};
