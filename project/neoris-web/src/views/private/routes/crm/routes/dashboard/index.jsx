import React from "react";
import { Container } from "./elements";
import ProfileCard from "./components/profileCard";
import ProgressCard from "./components/progressCard";
import CoursesCard from "./components/coursesCard";
import InfoCard from "./components/infoCard";
import { Row, Col } from "antd";

const Profile = ({ user }) => {
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
          <Col style={{ width: "35%" }}>
            <ProfileCard user={user} />
          </Col>
          <Col style={{ width: "60%", marginRight: "1vw" }}>
            <ProgressCard user={user} />
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
          <Col style={{ width: "35%" }}>
            <CoursesCard user={user} />
          </Col>
          <Col style={{ width: "60%", marginRight: "1vw" }}>
            <InfoCard user={user} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Profile;
