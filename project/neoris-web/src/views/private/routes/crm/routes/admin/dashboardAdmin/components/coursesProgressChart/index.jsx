import React from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { Row, Col, Progress, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const CoursesProgressChart = () => {
  const context =
    "Lo que esta grafica representa es el progreso promedio de todos los cursos de los usuarios.";

  return (
    <StyledDiv>
      <div style={{ marginTop: "20px" }} />
      <StyledTitle>Average Courses Progress</StyledTitle>
      <Row style={{ width: "70%", textAlign: "center" }}>
        <StyledText>
          Discover your team progress, and learn more about them{" "}
        </StyledText>
      </Row>

      <div style={{ marginTop: "50px" }} />
      <Progress
        type="circle"
        percent={90}
        width={150}
        strokeWidth={10}
        strokeColor={{
          "0%": "#90D7E7",
          "100%": "#108ee9",
        }}
        format={(percent) => (
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StyledText>Progress</StyledText>
            <StyledTitle style={{ fontSize: "24px" }}>{percent}%</StyledTitle>
          </Col>
        )}
      />
      <div style={{ marginTop: "20px" }} />
      <Row style={{ width: "100%" }} justify={"end"}>
        <Tooltip title={context}>
          <QuestionCircleOutlined style={{ fontSize: "18px" }} />
        </Tooltip>
      </Row>
    </StyledDiv>
  );
};

export default CoursesProgressChart;
