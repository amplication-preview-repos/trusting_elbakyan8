import { SortOrder } from "../../util/SortOrder";

export type AstrologerOrderByInput = {
  consultationPrice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
