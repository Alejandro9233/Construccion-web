import React from "react";
import { Nav, Container, ProfilePicture, Index, FlowBlock } from "./elements";
import { Button, Col, Row } from "antd";
import {
  InfoCircleOutlined,
  BellOutlined,
  MoonOutlined,
} from "@ant-design/icons";

const Navbar = ({user}) => {
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
            user?.foto_de_perfil ? user.foto_de_perfil : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
        />
      </Container>
    </Nav>
  );
};

export default Navbar;
