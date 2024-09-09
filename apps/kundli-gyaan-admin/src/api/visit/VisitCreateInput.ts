import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VisitCreateInput = {
  serviceRequested?: string | null;
  user?: UserWhereUniqueInput | null;
  visitDate?: Date | null;
};
