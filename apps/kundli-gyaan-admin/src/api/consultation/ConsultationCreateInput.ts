import { AstrologerWhereUniqueInput } from "../astrologer/AstrologerWhereUniqueInput";
import { PredictionCreateNestedManyWithoutConsultationsInput } from "./PredictionCreateNestedManyWithoutConsultationsInput";
import { ReportCreateNestedManyWithoutConsultationsInput } from "./ReportCreateNestedManyWithoutConsultationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConsultationCreateInput = {
  astrologer?: AstrologerWhereUniqueInput | null;
  date?: Date | null;
  predictions?: PredictionCreateNestedManyWithoutConsultationsInput;
  reports?: ReportCreateNestedManyWithoutConsultationsInput;
  status?: "Option1" | null;
  time?: Date | null;
  user?: UserWhereUniqueInput | null;
};
