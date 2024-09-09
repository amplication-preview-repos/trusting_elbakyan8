import { CallRecordWhereInput } from "./CallRecordWhereInput";
import { CallRecordOrderByInput } from "./CallRecordOrderByInput";

export type CallRecordFindManyArgs = {
  where?: CallRecordWhereInput;
  orderBy?: Array<CallRecordOrderByInput>;
  skip?: number;
  take?: number;
};
