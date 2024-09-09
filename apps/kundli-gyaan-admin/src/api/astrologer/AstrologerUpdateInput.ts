import { CallRecordUpdateManyWithoutAstrologersInput } from "./CallRecordUpdateManyWithoutAstrologersInput";
import { ConsultationUpdateManyWithoutAstrologersInput } from "./ConsultationUpdateManyWithoutAstrologersInput";

export type AstrologerUpdateInput = {
  callRecords?: CallRecordUpdateManyWithoutAstrologersInput;
  consultationPrice?: number | null;
  consultations?: ConsultationUpdateManyWithoutAstrologersInput;
  name?: string | null;
  rating?: number | null;
  specialization?: string | null;
};
