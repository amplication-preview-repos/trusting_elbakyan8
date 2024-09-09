import { AstrologerWhereUniqueInput } from "../astrologer/AstrologerWhereUniqueInput";
import { PredictionUpdateManyWithoutConsultationsInput } from "./PredictionUpdateManyWithoutConsultationsInput";
import { ReportUpdateManyWithoutConsultationsInput } from "./ReportUpdateManyWithoutConsultationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConsultationUpdateInput = {
  astrologer?: AstrologerWhereUniqueInput | null;
  date?: Date | null;
  predictions?: PredictionUpdateManyWithoutConsultationsInput;
  reports?: ReportUpdateManyWithoutConsultationsInput;
  status?: "Option1" | null;
  time?: Date | null;
  user?: UserWhereUniqueInput | null;
};
