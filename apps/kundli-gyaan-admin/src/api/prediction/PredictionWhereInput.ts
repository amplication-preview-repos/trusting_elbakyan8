import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PredictionWhereInput = {
  consultation?: ConsultationWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
