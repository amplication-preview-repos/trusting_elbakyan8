import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";

export type PredictionUpdateInput = {
  consultation?: ConsultationWhereUniqueInput | null;
  content?: string | null;
};
