import { Visit as TVisit } from "../api/visit/Visit";

export const VISIT_TITLE_FIELD = "serviceRequested";

export const VisitTitle = (record: TVisit): string => {
  return record.serviceRequested?.toString() || String(record.id);
};
