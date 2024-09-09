import { SortOrder } from "../../util/SortOrder";

export type VisitOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  serviceRequested?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  visitDate?: SortOrder;
};
