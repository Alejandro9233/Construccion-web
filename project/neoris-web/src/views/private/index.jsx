import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MainLayout from "../../layouts/main";
import AuthLayout from "../../layouts/auth";
import Authentication from "./routes/authentication";
import CRM from "./routes/crm";

const Private = () => {
  //const location = useLocation();

  const [a] = useState(true);

  if (!a) {
    return (
       <AuthLayout>
          <Authentication />
       </AuthLayout>
    );
  } else {
    return (
      <MainLayout>
        <CRM />
      </MainLayout>
    );
  }
};

export default withRouter(Private);
