import { AstrologerWhereUniqueInput } from "../astrologer/AstrologerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PredictionListRelationFilter } from "../prediction/PredictionListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConsultationWhereInput = {
  astrologer?: AstrologerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  predictions?: PredictionListRelationFilter;
  reports?: ReportListRelationFilter;
  status?: "Option1";
  time?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
