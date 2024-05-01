import React, { useState, useEffect } from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { Row, Col, Image, Tooltip, Button } from "antd";
import { AlertTwoTone, ArrowRightOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import moment from "moment";
import AllUsersDrawer from "./components/allUsers-Drawer";

const UserCard = ({ foto_de_perfil, nombre_usuario, ultima_conexion }) => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    const daysAgo = moment().diff(moment(ultima_conexion), "days");

    if (daysAgo < 2) {
      setStatus({ status: "Active", color: "#87d068" });
    } else if (daysAgo < 3) {
      setStatus({ status: "Low Active", color: "#FFC000" });
    } else {
      setStatus({ status: "Inactive", color: "red" });
    }
  }, [ultima_conexion]);

  return (
    <div style={{ width: "100%" }}>
      <Row justify={"space-between"} align={"middle"}>
        <Row align={"middle"}>
          <Image
            preview={false}
            src={
              foto_de_perfil
                ? foto_de_perfil
                : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            }
            style={{
              borderRadius: "50%",
              width: "3vw",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />
          <Col
            style={{
              marginLeft: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: "0" }}>
              <StyledTitle style={{ fontSize: "16px" }}>
                {nombre_usuario}
              </StyledTitle>
            </div>
            <div style={{ marginTop: "-5px" }}>
              <StyledText>{moment(ultima_conexion).fromNow()}</StyledText>
            </div>
          </Col>
        </Row>
        <Tooltip title={`Status: ${status?.status}`}>
          <AlertTwoTone
            twoToneColor={status?.color}
            style={{ fontSize: "25px" }}
          />
        </Tooltip>
      </Row>
    </div>
  );
};

const TeamView = () => {
  const [visible, setVisible] = useState(false);

  const fetchTeamUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/usuarios-no-admins", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener usuarios");
      }
      return response.json();
    } catch (err) {
      console.error(err);
    }
  };

  const { data: teamUsers } = useQuery("teamUsers", fetchTeamUsers);

  return (
    <StyledDiv>
      <StyledTitle>Your Team</StyledTitle>
      <Row
        style={{ width: "100%", marginTop: "40px" }}
        justify={"space-between"}
      >
        {teamUsers?.slice(0, 4).map((member, index) => (
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <UserCard key={index} {...member} />
          </div>
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
        <Button
          icon={<ArrowRightOutlined />}
          style={{ border: "none" }}
          onClick={() => setVisible(true)}
        >
          View All
        </Button>
      </div>
      <AllUsersDrawer
        visible={visible}
        setVisible={setVisible}
        data={teamUsers}
      />
    </StyledDiv>
  );
};

export default TeamView;
