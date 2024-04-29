import React, { useState, useEffect} from "react";
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

const UserCard = ({ foto_de_perfil, nombre_usuario, puesto }) => (
  <div style={{ width: "100%" }}>
    <Row justify={"space-between"} align={"middle"}>
      <Row align={"middle"}>
        <Image
          preview={false}
          src={foto_de_perfil ? foto_de_perfil : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"}
          style={{ borderRadius: "50%", width: "3vw", aspectRatio: "1/1", objectFit: "cover" }}
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
          <StyledTitle style={{ fontSize: "16px" }}>{nombre_usuario}</StyledTitle>
          <StyledText>{puesto}</StyledText>
        </Col>
      </Row>
      <Tooltip title={`Status: `}>
        <AlertTwoTone
          // twoToneColor={getStatusColor(status)}
          style={{ fontSize: "20px" }}
        />
      </Tooltip>
    </Row>
  </div>
);

const TeamView = ({user}) => {
  // Use state para guardar los ususarios que no son admins y no están eliminados
  // Datos de respuesta: nombre_usuario, foto_de_perfil, puesto
  const [teamUsers, setTeamUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:5000/usuarios-no-admins`)
        .then((res) => res.json())
        .then((data) => {
          setTeamUsers(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  fetchData();

  }, [user]);

  return (
    <StyledDiv>
      <StyledTitle>Your Team</StyledTitle>
      <Row
        style={{ width: "100%", marginTop: "10px" }}
        justify={"space-between"}
      >
        {teamUsers?.slice(0, 4).map((member, index) => (
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
