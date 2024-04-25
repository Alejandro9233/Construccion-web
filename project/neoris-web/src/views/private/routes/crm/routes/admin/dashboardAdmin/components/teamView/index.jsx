import React from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { Row, Col, Image, Tooltip, Button } from "antd";
import { AlertTwoTone, ArrowRightOutlined } from "@ant-design/icons";

const getStatusColor = (status) => {
  switch (status) {
    case "Ok":
      return "#87d068";
    case "Busy":
      return "red";
    case "Away":
      return "yellow";
    default:
      return "gray";
  }
};

const UserCard = ({ imgSrc, name, time, status }) => (
  <div style={{ width: "100%" }}>
    <Row justify={"space-between"} align={"middle"}>
      <Row align={"middle"}>
        <Image
          preview={false}
          src={imgSrc}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <Col
          style={{
            marginLeft: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "-5px",
            height: "80%",
          }}
        >
          <StyledTitle style={{ fontSize: "16px" }}>{name}</StyledTitle>
          <StyledText>{time}</StyledText>
        </Col>
      </Row>
      <Tooltip title={`Status: ${status}`}>
        <AlertTwoTone
          twoToneColor={getStatusColor(status)}
          style={{ fontSize: "20px" }}
        />
      </Tooltip>
    </Row>
  </div>
);

const TeamView = () => {
  const teamMembers = [
    {
      imgSrc: "https://i.ibb.co/8b3YB8L/Rectangle-1.png",
      name: "Felix Gutierrez",
      time: "Today, 16:36",
      status: "Ok",
    },
    {
      imgSrc: "https://i.ibb.co/8b3YB8L/Rectangle-2.png",
      name: "Maria Rodriguez",
      time: "Today, 15:30",
      status: "Busy",
    },
    {
      imgSrc: "https://i.ibb.co/8b3YB8L/Rectangle-3.png",
      name: "Carlos Hernandez",
      time: "Today, 14:20",
      status: "Away",
    },
    {
      imgSrc: "https://i.ibb.co/8b3YB8L/Rectangle-4.png",
      name: "Ana Martinez",
      time: "Today, 13:10",
      status: "Ok",
    },
    {
      imgSrc: "https://i.ibb.co/8b3YB8L/Rectangle-4.png",
      name: "Ana Martinez",
      time: "Today, 13:10",
      status: "Ok",
    },
    // Agrega más miembros del equipo aquí
  ];

  return (
    <StyledDiv>
      <StyledTitle>Your Team</StyledTitle>
      <Row
        style={{ width: "100%", marginTop: "10px" }}
        justify={"space-between"}
      >
        {teamMembers.slice(0, 4).map((member, index) => (
          <UserCard key={index} {...member} />
        ))}
      </Row>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button icon={<ArrowRightOutlined />} style={{ border: "none" }}>
          View All
        </Button>
      </div>
    </StyledDiv>
  );
};

export default TeamView;
