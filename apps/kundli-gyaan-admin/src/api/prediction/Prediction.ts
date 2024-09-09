import { Consultation } from "../consultation/Consultation";

export type Prediction = {
  consultation?: Consultation | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
