import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Image, Button, Divider } from "antd";
import { Menu, Text, Container } from "./elements";
import Logo from "./logo.png";
import {
  IdcardTwoTone,
  BookTwoTone,
  PieChartTwoTone,
  RocketTwoTone,
} from "@ant-design/icons";

const { Item } = Menu;

const Sidebar = ({ user, setUser }) => {
  const history = useHistory();

  const handleLogout = async () => {
    await setUser("");
    localStorage.removeItem("selectedKey");
    history.push("/");
  };

  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("selectedKey")
  );

  useEffect(() => {
    localStorage.setItem("selectedKey", selectedKey);
  }, [selectedKey]);

  let routes = (
    <>
      <Item
        icon={<IdcardTwoTone style={{ fontSize: "20px" }} />}
        key="/profile"
        onClick={() => setSelectedKey("/profile")}
        style={{
          background:
            selectedKey === "/profile" || selectedKey === "/"
              ? "linear-gradient(to top right, #90D7E7 60%, #108ee9)"
              : "none",
          paddingLeft: "30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/profile">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text selected={selectedKey === "/profile"}>Perfil</Text>
          </div>
        </Link>
      </Item>
      <Item
        icon={<BookTwoTone style={{ fontSize: "20px" }} />}
        key="/courses"
        onClick={() => setSelectedKey("/courses")}
        style={{
          background:
            selectedKey === "/courses"
              ? "linear-gradient(to top right, #90D7E7 60%, #108ee9)"
              : "none",
          paddingLeft: "30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/courses">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text selected={selectedKey === "/courses"}>Cursos</Text>
          </div>
        </Link>
      </Item>
      <Item
        icon={<RocketTwoTone style={{ fontSize: "20px" }} />}
        key="/game"
        onClick={() => setSelectedKey("/game")}
        style={{
          background:
            selectedKey === "/game"
              ? "linear-gradient(to top right, #90D7E7 60%, #108ee9)"
              : "none",
          paddingLeft: "30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/game">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text selected={selectedKey === "/game"}>Video Juego</Text>
          </div>
        </Link>
      </Item>
    </>
  );

  let routesAdmin = (
    <>
      <Item
        icon={<PieChartTwoTone style={{ fontSize: "20px" }} />}
        key="/dashboard"
        onClick={() => setSelectedKey("/dashboard")}
        style={{
          background:
            selectedKey === "/dashboard" || selectedKey === "/"
              ? "linear-gradient(to top right, #90D7E7 60%, #108ee9)"
              : "none",
          paddingLeft: "30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/dashboard">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text selected={selectedKey === "/dashboard"}>Dashboard</Text>
          </div>
        </Link>
      </Item>
      <Item
        icon={<IdcardTwoTone style={{ fontSize: "20px" }} />}
        key="/users"
        onClick={() => setSelectedKey("/users")}
        style={{
          background:
            selectedKey === "/users"
              ? "linear-gradient(to top right, #90D7E7 60%, #108ee9)"
              : "none",
          paddingLeft: "30px",
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Link to="/users">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text selected={selectedKey === "/users"}>Usuarios</Text>
          </div>
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
          defaultSelectedKeys={[history.location.pathname.toLowerCase()]}
          selectedKeys={[history.location.pathname.toLowerCase()]}
        >
          {user?.es_admin ? routesAdmin : routes}
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
        <Button danger onClick={() => handleLogout()}>
          Cerrar Sesión
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(Sidebar);
