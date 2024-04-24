import React from "react";
import { Container } from "./elements";
import { Row, Col } from "antd";
import GameTrafficChart from "./components/gameTrafficChart";
import GameAvgHoursChart from "./components/gameAvgHoursChart";
import CoursesProgressChart from "./components/coursesProgressChart";

const DashboardAdmin = () => {
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
            <GameTrafficChart />
          </Col>
          <Col style={{ width: "30%" }}>
            <GameAvgHoursChart />
          </Col>
          <Col style={{ width: "30%", marginRight: "7vw" }}>
            <CoursesProgressChart />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default DashboardAdmin;
