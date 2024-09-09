import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  consultationId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
