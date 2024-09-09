import { AstrologerWhereUniqueInput } from "../astrologer/AstrologerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CallRecordWhereInput = {
  astrologer?: AstrologerWhereUniqueInput;
  callEnd?: DateTimeNullableFilter;
  callStart?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
