import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MainLayout from "../../layouts/main";
import AuthLayout from "../../layouts/auth";
import Authentication from "./routes/authentication";
import CRM from "./routes/crm";

const Private = () => {
  //const location = useLocation();

  const [user, setUser] = useState();

  if (!user) {
    return (
      <AuthLayout>
        <Authentication setUser={setUser} />
      </AuthLayout>
    );
  } else {
    return (
      <MainLayout>
        <CRM user={user}/>
      </MainLayout>
    );
  }
};

export default withRouter(Private);
