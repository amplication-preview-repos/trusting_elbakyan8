import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  consultation?: ConsultationWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
