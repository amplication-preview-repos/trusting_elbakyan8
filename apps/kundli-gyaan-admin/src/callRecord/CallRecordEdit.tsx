import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AstrologerTitle } from "../astrologer/AstrologerTitle";
import { UserTitle } from "../user/UserTitle";

export const CallRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="astrologer.id"
          reference="Astrologer"
          label="astrologer"
        >
          <SelectInput optionText={AstrologerTitle} />
        </ReferenceInput>
        <DateTimeInput label="callEnd" source="callEnd" />
        <DateTimeInput label="callStart" source="callStart" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
