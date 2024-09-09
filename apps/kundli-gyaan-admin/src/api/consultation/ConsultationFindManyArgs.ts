import { ConsultationWhereInput } from "./ConsultationWhereInput";
import { ConsultationOrderByInput } from "./ConsultationOrderByInput";

export type ConsultationFindManyArgs = {
  where?: ConsultationWhereInput;
  orderBy?: Array<ConsultationOrderByInput>;
  skip?: number;
  take?: number;
};
