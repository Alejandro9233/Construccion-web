import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Image, Button, Divider } from "antd";
import { Menu, Text, Container } from "./elements";
import Logo from "./logo.png";
import { FundTwoTone, HomeTwoTone } from "@ant-design/icons";

const { Item } = Menu;

const Sidebar = () => {
  /* const handleLogout = async () => {
    await logout();
  };
  */
  const { user } = { user: { name: "John Doe", type: "admin" } };

  const [selectedKey, setSelectedKey] = useState(null);

  let routes = (
    <>
      <Item
        icon={<FundTwoTone />}
        key="/profile"
        onClick={() => setSelectedKey("/profile")}
        style={{
          background:
            selectedKey === "/profile"
              ? "linear-gradient(to top right, black 60%, gray)"
              : "none",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/profile">
          <Text selected={selectedKey === "/profile"}>Perfil</Text>
        </Link>
      </Item>
      <Item
        icon={<HomeTwoTone />}
        key="/courses"
        onClick={() => setSelectedKey("/courses")}
        style={{
          background:
            selectedKey === "/courses"
              ? "linear-gradient(to top right, black 60%, gray)"
              : "none",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/courses">
          <Text selected={selectedKey === "/courses"}>Cursos</Text>
        </Link>
      </Item>
    </>
  );

  let routesAdmin = (
    <>
      <Item
        icon={<FundTwoTone />}
        key="/dashboard"
        onClick={() => setSelectedKey("/dashboard")}
        style={{
          background:
            selectedKey === "/dashboard"
              ? "linear-gradient(to top right, black 60%, gray)"
              : "none",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/dashboard">
          <Text selected={selectedKey === "/dashboard"}>Dashboard</Text>
        </Link>
      </Item>
      <Item
        icon={<HomeTwoTone />}
        key="/users"
        onClick={() => setSelectedKey("/users")}
        style={{
          background:
            selectedKey === "/users"
              ? "linear-gradient(to top right, black 60%, gray)"
              : "none",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/home">
          <Text selected={selectedKey === "/users"}>Usuarios</Text>
        </Link>
      </Item>
    </>
  );

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          style={{
            display: "block",
            paddingLeft: 30,
            paddingRight: 30,
            marginTop: 20,
          }}
          preview={false}
          height={"50px"}
          width={"242px"}
          src={Logo}
          alt=""
        />
        <Divider />
        <Menu
          theme="dark"
          style={{
            background: "none",
          }}
        >
          {user.type === "admin" ? routesAdmin : routes}
        </Menu>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "15px 0 ",
        }}
      >
        <Button danger onClick={() => console.log("cerrar sesion")}>
          Cerrar Session
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(Sidebar);
