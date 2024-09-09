import { CallRecordUpdateManyWithoutUsersInput } from "./CallRecordUpdateManyWithoutUsersInput";
import { ConsultationUpdateManyWithoutUsersInput } from "./ConsultationUpdateManyWithoutUsersInput";
import { KundliUpdateManyWithoutUsersInput } from "./KundliUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VisitUpdateManyWithoutUsersInput } from "./VisitUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  callRecords?: CallRecordUpdateManyWithoutUsersInput;
  consultations?: ConsultationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  kundlis?: KundliUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  reports?: ReportUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  visits?: VisitUpdateManyWithoutUsersInput;
};
