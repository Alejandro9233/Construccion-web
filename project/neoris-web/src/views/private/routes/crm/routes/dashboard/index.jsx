import React from "react";
import { Container } from "./elements";
import ProfileCard from "./components/profileCard";
import ProgressCard from "./components/progressCard";
import CoursesCard from "./components/coursesCard";
import InfoCard from "./components/infoCard";
import { Row, Col } from "antd";

const Profile = () => {
  return (
    <Container>
      <Col style={{ width: "100%" }}>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Col style={{ width: "30%" }}>
            <ProfileCard />
          </Col>
          <Col style={{ width: "60%", marginRight: "7vw" }}>
            <ProgressCard />
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            marginTop: "3vh",
          }}
        >
          <Col style={{ width: "30%" }}>
            <CoursesCard />
          </Col>
          <Col style={{ width: "60%", marginRight: "7vw" }}>
            <InfoCard />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Profile;
