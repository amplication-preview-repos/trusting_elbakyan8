import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  consultationId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
