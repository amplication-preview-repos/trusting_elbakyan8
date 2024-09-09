import { VisitWhereInput } from "./VisitWhereInput";
import { VisitOrderByInput } from "./VisitOrderByInput";

export type VisitFindManyArgs = {
  where?: VisitWhereInput;
  orderBy?: Array<VisitOrderByInput>;
  skip?: number;
  take?: number;
};
