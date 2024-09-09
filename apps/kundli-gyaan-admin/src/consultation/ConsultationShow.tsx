import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONSULTATION_TITLE_FIELD } from "./ConsultationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ASTROLOGER_TITLE_FIELD } from "../astrologer/AstrologerTitle";

export const ConsultationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Prediction"
          target="consultationId"
          label="Predictions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="consultation"
              source="consultation.id"
              reference="Consultation"
            >
              <TextField source={CONSULTATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="consultationId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Consultation"
              source="consultation.id"
              reference="Consultation"
            >
              <TextField source={CONSULTATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
