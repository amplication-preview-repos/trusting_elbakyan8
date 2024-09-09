import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASTROLOGER_TITLE_FIELD } from "../astrologer/AstrologerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CallRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CallRecords"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
