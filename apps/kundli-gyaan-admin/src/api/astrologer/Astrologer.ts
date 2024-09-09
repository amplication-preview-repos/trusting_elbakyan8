import { CallRecord } from "../callRecord/CallRecord";
import { Consultation } from "../consultation/Consultation";

export type Astrologer = {
  callRecords?: Array<CallRecord>;
  consultationPrice: number | null;
  consultations?: Array<Consultation>;
  createdAt: Date;
  id: string;
  name: string | null;
  rating: number | null;
  specialization: string | null;
  updatedAt: Date;
};
