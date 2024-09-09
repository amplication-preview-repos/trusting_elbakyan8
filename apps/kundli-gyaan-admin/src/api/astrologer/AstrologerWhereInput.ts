import { CallRecordListRelationFilter } from "../callRecord/CallRecordListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ConsultationListRelationFilter } from "../consultation/ConsultationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AstrologerWhereInput = {
  callRecords?: CallRecordListRelationFilter;
  consultationPrice?: FloatNullableFilter;
  consultations?: ConsultationListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
  specialization?: StringNullableFilter;
};
