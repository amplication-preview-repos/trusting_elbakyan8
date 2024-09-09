import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CallRecordTitle } from "../callRecord/CallRecordTitle";
import { ConsultationTitle } from "../consultation/ConsultationTitle";

export const AstrologerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="callRecords"
          reference="CallRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CallRecordTitle} />
        </ReferenceArrayInput>
        <NumberInput label="consultationPrice" source="consultationPrice" />
        <ReferenceArrayInput
          source="consultations"
          reference="Consultation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConsultationTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="specialization" source="specialization" />
      </SimpleForm>
    </Create>
  );
};
