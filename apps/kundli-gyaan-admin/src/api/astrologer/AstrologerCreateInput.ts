import { CallRecordCreateNestedManyWithoutAstrologersInput } from "./CallRecordCreateNestedManyWithoutAstrologersInput";
import { ConsultationCreateNestedManyWithoutAstrologersInput } from "./ConsultationCreateNestedManyWithoutAstrologersInput";

export type AstrologerCreateInput = {
  callRecords?: CallRecordCreateNestedManyWithoutAstrologersInput;
  consultationPrice?: number | null;
  consultations?: ConsultationCreateNestedManyWithoutAstrologersInput;
  name?: string | null;
  rating?: number | null;
  specialization?: string | null;
};
