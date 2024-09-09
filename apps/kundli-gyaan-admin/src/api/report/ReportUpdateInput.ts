import { ConsultationWhereUniqueInput } from "../consultation/ConsultationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  consultation?: ConsultationWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
