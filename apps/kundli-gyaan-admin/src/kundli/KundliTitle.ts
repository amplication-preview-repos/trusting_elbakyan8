import { Kundli as TKundli } from "../api/kundli/Kundli";

export const KUNDLI_TITLE_FIELD = "id";

export const KundliTitle = (record: TKundli): string => {
  return record.id?.toString() || String(record.id);
};
