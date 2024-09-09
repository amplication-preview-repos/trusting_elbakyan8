import { Consultation } from "../consultation/Consultation";
import { User } from "../user/User";

export type Report = {
  consultation?: Consultation | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
