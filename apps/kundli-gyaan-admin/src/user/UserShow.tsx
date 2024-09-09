import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ASTROLOGER_TITLE_FIELD } from "../astrologer/AstrologerTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { CONSULTATION_TITLE_FIELD } from "../consultation/ConsultationTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="CallRecord"
          target="userId"
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
          target="userId"
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
        <ReferenceManyField reference="Kundli" target="userId" label="Kundlis">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="details" source="details" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="userId" label="Reports">
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
        <ReferenceManyField reference="Visit" target="userId" label="Visits">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="serviceRequested" source="serviceRequested" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="visitDate" source="visitDate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
