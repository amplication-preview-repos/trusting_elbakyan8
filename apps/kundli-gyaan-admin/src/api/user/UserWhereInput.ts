import { CallRecordListRelationFilter } from "../callRecord/CallRecordListRelationFilter";
import { ConsultationListRelationFilter } from "../consultation/ConsultationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KundliListRelationFilter } from "../kundli/KundliListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { VisitListRelationFilter } from "../visit/VisitListRelationFilter";

export type UserWhereInput = {
  callRecords?: CallRecordListRelationFilter;
  consultations?: ConsultationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  kundlis?: KundliListRelationFilter;
  lastName?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  username?: StringFilter;
  visits?: VisitListRelationFilter;
};
