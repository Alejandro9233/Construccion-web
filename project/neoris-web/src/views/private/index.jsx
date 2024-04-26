import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MainLayout from "../../layouts/main";
import AuthLayout from "../../layouts/auth";
import Authentication from "./routes/authentication";
import CRM from "./routes/crm";

const Private = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  if (!user) {
    return (
      <AuthLayout>
        <Authentication setUser={setUser} />
      </AuthLayout>
    );
  } else {
    return (
      <MainLayout user={user} setUser={setUser}>
        <CRM user={user} />
      </MainLayout>
    );
  }
};

export default withRouter(Private);
