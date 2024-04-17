import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Image } from "antd";
import { Menu, Button, Text, Container } from "./elements";
import Logo from "./logo.png";
import { FundTwoTone, HomeTwoTone } from "@ant-design/icons";

const { Item } = Menu;

const Sidebar = () => {
  /* const handleLogout = async () => {
    await logout();
  };
  */

  const [selectedKey, setSelectedKey] = useState(null);

  let routes = (
    <>
      <Item
        icon={<FundTwoTone />}
        key="/dashboard"
        onClick={() => setSelectedKey("/dashboard")}
        style={{
          background:
            selectedKey === "/dashboard"
              ? "linear-gradient(to right, black 80%, gray)"
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
        key="/home"
        onClick={() => setSelectedKey("/home")}
        style={{
          background:
            selectedKey === "/home"
              ? "linear-gradient(to right, black 80%, gray)"
              : "none",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/home">
          <Text selected={selectedKey === "/home"}>Home</Text>
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

        <Menu
          theme="dark"
          style={{
            marginTop: 40,
            background: "none",
          }}
        >
          {routes}
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
        <Button type="danger" onClick={() => console.log("cerrar sesion")}>
          Cerrar Session
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(Sidebar);
