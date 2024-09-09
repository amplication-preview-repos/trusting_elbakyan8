import { Consultation as TConsultation } from "../api/consultation/Consultation";

export const CONSULTATION_TITLE_FIELD = "id";

export const ConsultationTitle = (record: TConsultation): string => {
  return record.id?.toString() || String(record.id);
};
