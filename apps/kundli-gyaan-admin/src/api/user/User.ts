import { CallRecord } from "../callRecord/CallRecord";
import { Consultation } from "../consultation/Consultation";
import { Kundli } from "../kundli/Kundli";
import { Report } from "../report/Report";
import { JsonValue } from "type-fest";
import { Visit } from "../visit/Visit";

export type User = {
  callRecords?: Array<CallRecord>;
  consultations?: Array<Consultation>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  kundlis?: Array<Kundli>;
  lastName: string | null;
  reports?: Array<Report>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  visits?: Array<Visit>;
};
