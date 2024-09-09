import { Astrologer } from "../astrologer/Astrologer";
import { Prediction } from "../prediction/Prediction";
import { Report } from "../report/Report";
import { User } from "../user/User";

export type Consultation = {
  astrologer?: Astrologer | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  predictions?: Array<Prediction>;
  reports?: Array<Report>;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
  user?: User | null;
};
