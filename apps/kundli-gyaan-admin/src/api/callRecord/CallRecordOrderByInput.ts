import { SortOrder } from "../../util/SortOrder";

export type CallRecordOrderByInput = {
  astrologerId?: SortOrder;
  callEnd?: SortOrder;
  callStart?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
