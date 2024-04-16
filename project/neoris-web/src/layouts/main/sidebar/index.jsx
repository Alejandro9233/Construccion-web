import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Image, Typography, Button } from "antd";
import { Menu } from "./elements";
//import Logo from "./logo4.png";

const { Item } = Menu;
const { Text } = Typography;

const Sidebar = () => {

 /* const handleLogout = async () => {
    await logout();
  };
  */

  let routes = (
  <>
    <Item key="/dashboard">
      <Link to="/dashboard">
        <Text strong style={{ color: "white" }}>
          Dashboard
        </Text>
      </Link>
    </Item>
  </>
);
let routesAdmin = (
    <>
    <Item key="/dashboard">
      <Link to="/dashboard">
        <Text strong style={{ color: "white" }}>
          Dashboard
        </Text>
      </Link>
    </Item>
  </>
);
return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100hv",
      justifyContent: "space-between",
    }}
  >
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
        height={28}
        src="https://www.neoris.com/wp-content/uploads/2020/09/Neoris-Logo-White.png"
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
      <Button type="danger" onClick={() => console.log('cerrar sesion')}>
        Cerrar Session
      </Button>
    </div>
  </div>
);
}

export default withRouter(Sidebar);