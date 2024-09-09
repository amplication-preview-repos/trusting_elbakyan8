import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Kundli = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
