import { Astrologer } from "../astrologer/Astrologer";
import { User } from "../user/User";

export type CallRecord = {
  astrologer?: Astrologer | null;
  callEnd: Date | null;
  callStart: Date | null;
  createdAt: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
