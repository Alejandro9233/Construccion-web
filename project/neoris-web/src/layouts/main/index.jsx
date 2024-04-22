import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout as Layer, Card } from "antd";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layer style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layer
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#FFF",
        }}
      >
        <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
        <Layer
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "#FFF",
          }}
        >
          <Navbar />
          <Card
            style={{
              margin: 15,
              height: "96vh",
              width: "90vw",
              overflow: "hidden",
              borderRadius: 20,
            }}
          >
            {children}
          </Card>
          <Footer />
        </Layer>
      </Layer>
    </Layer>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;
