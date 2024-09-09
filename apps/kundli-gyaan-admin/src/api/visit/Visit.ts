import { User } from "../user/User";

export type Visit = {
  createdAt: Date;
  id: string;
  serviceRequested: string | null;
  updatedAt: Date;
  user?: User | null;
  visitDate: Date | null;
};
