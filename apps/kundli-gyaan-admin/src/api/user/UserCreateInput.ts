import { CallRecordCreateNestedManyWithoutUsersInput } from "./CallRecordCreateNestedManyWithoutUsersInput";
import { ConsultationCreateNestedManyWithoutUsersInput } from "./ConsultationCreateNestedManyWithoutUsersInput";
import { KundliCreateNestedManyWithoutUsersInput } from "./KundliCreateNestedManyWithoutUsersInput";
import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VisitCreateNestedManyWithoutUsersInput } from "./VisitCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  callRecords?: CallRecordCreateNestedManyWithoutUsersInput;
  consultations?: ConsultationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  kundlis?: KundliCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  reports?: ReportCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  visits?: VisitCreateNestedManyWithoutUsersInput;
};
