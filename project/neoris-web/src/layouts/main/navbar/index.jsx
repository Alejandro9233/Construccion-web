import React from "react";
import { Nav, Container, ProfilePicture, Index, FlowBlock } from "./elements";
import { Button, Col, Row } from "antd";
import {
  InfoCircleOutlined,
  BellOutlined,
  MoonOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <Nav>
      <Col>
        <Index>Neo / Profile / Overview</Index>
        <Row>
          <FlowBlock />
          <FlowBlock style={{ marginLeft: "10px", width: "60%" }} />
        </Row>
      </Col>
      <Container>
        <Button
          style={{ marginRight: "10px", height: "30px", border: "none" }}
          shape="circle"
          icon={<BellOutlined />}
        />
        <Button
          style={{ marginRight: "10px", height: "30px", border: "none" }}
          shape="circle"
          icon={<MoonOutlined />}
        />
        <Button
          style={{ marginRight: "10px", height: "30px", border: "none" }}
          shape="circle"
          icon={<InfoCircleOutlined />}
        />
        <ProfilePicture
          src={
            "https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds"
          }
        />
      </Container>
    </Nav>
  );
};

export default Navbar;
