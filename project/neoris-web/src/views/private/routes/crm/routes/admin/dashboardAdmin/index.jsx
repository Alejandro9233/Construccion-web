import React from "react";
import { Container } from "./elements";
import { Row, Col } from "antd";
import GameTrafficChart from "./components/gameTrafficChart";
import GameAvgHoursChart from "./components/gameAvgHoursChart";
import CoursesProgressChart from "./components/coursesProgressChart";
import TeamView from "./components/teamView";
import CoursesTable from "./components/coursesTable";

const DashboardAdmin = ({user}) => {
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
          <Col style={{ width: "31%" }}>
            <GameTrafficChart user={user}/>
          </Col>
          <Col style={{ width: "31%" }}>
            <GameAvgHoursChart user={user}/>
          </Col>
          <Col style={{ width: "31%" }}>
            <CoursesProgressChart user={user}/>
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Col style={{ width: "31%" }}>
            <TeamView user={user}/>
          </Col>
          <Col style={{ width: "65%" }}>
            <CoursesTable user={user}/>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default DashboardAdmin;
