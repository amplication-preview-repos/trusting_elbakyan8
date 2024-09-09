import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConsultationList } from "./consultation/ConsultationList";
import { ConsultationCreate } from "./consultation/ConsultationCreate";
import { ConsultationEdit } from "./consultation/ConsultationEdit";
import { ConsultationShow } from "./consultation/ConsultationShow";
import { AstrologerList } from "./astrologer/AstrologerList";
import { AstrologerCreate } from "./astrologer/AstrologerCreate";
import { AstrologerEdit } from "./astrologer/AstrologerEdit";
import { AstrologerShow } from "./astrologer/AstrologerShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CallRecordList } from "./callRecord/CallRecordList";
import { CallRecordCreate } from "./callRecord/CallRecordCreate";
import { CallRecordEdit } from "./callRecord/CallRecordEdit";
import { CallRecordShow } from "./callRecord/CallRecordShow";
import { VisitList } from "./visit/VisitList";
import { VisitCreate } from "./visit/VisitCreate";
import { VisitEdit } from "./visit/VisitEdit";
import { VisitShow } from "./visit/VisitShow";
import { KundliList } from "./kundli/KundliList";
import { KundliCreate } from "./kundli/KundliCreate";
import { KundliEdit } from "./kundli/KundliEdit";
import { KundliShow } from "./kundli/KundliShow";
import { PredictionList } from "./prediction/PredictionList";
import { PredictionCreate } from "./prediction/PredictionCreate";
import { PredictionEdit } from "./prediction/PredictionEdit";
import { PredictionShow } from "./prediction/PredictionShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"KundliGyaan"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Consultation"
          list={ConsultationList}
          edit={ConsultationEdit}
          create={ConsultationCreate}
          show={ConsultationShow}
        />
        <Resource
          name="Astrologer"
          list={AstrologerList}
          edit={AstrologerEdit}
          create={AstrologerCreate}
          show={AstrologerShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="CallRecord"
          list={CallRecordList}
          edit={CallRecordEdit}
          create={CallRecordCreate}
          show={CallRecordShow}
        />
        <Resource
          name="Visit"
          list={VisitList}
          edit={VisitEdit}
          create={VisitCreate}
          show={VisitShow}
        />
        <Resource
          name="Kundli"
          list={KundliList}
          edit={KundliEdit}
          create={KundliCreate}
          show={KundliShow}
        />
        <Resource
          name="Prediction"
          list={PredictionList}
          edit={PredictionEdit}
          create={PredictionCreate}
          show={PredictionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
