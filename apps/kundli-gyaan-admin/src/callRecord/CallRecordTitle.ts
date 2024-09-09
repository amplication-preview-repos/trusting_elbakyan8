import { CallRecord as TCallRecord } from "../api/callRecord/CallRecord";

export const CALLRECORD_TITLE_FIELD = "id";

export const CallRecordTitle = (record: TCallRecord): string => {
  return record.id?.toString() || String(record.id);
};
