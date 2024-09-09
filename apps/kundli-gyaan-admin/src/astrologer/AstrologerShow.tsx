import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ASTROLOGER_TITLE_FIELD } from "./AstrologerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AstrologerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="consultationPrice" source="consultationPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="rating" source="rating" />
        <TextField label="specialization" source="specialization" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CallRecord"
          target="astrologerId"
          label="CallRecords"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="astrologer"
              source="astrologer.id"
              reference="Astrologer"
            >
              <TextField source={ASTROLOGER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="callEnd" source="callEnd" />
            <TextField label="callStart" source="callStart" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Consultation"
          target="astrologerId"
          label="Consultations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Astrologer"
              source="astrologer.id"
              reference="Astrologer"
            >
              <TextField source={ASTROLOGER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="time" source="time" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
