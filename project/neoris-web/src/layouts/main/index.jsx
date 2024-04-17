import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout as Layer, Card } from "antd";
import Sidebar from "./sidebar";
// import Navbar from "layouts/main/navbar";
// import Footer from "layouts/main/footer";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layer style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layer
        style={{
          background: "#ffffff",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
        <Card
          style={{
            margin: 15,
            height: "96vh",
            width: "90vw",
            overflow: "hidden",
            borderRadius: 20,
          }}
        >
          {/* <Navbar /> */}
          {children}
        </Card>
        {/* <Footer /> */}
      </Layer>
    </Layer>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;
