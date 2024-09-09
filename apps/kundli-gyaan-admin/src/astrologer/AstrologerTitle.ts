import { Astrologer as TAstrologer } from "../api/astrologer/Astrologer";

export const ASTROLOGER_TITLE_FIELD = "name";

export const AstrologerTitle = (record: TAstrologer): string => {
  return record.name?.toString() || String(record.id);
};
