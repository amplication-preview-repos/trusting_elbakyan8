import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";

export type PredictionCreateInput = {
  consultation?: ConsultationWhereUniqueInput | null;
  content?: string | null;
};
