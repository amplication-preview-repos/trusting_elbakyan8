import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VisitUpdateInput = {
  serviceRequested?: string | null;
  user?: UserWhereUniqueInput | null;
  visitDate?: Date | null;
};
