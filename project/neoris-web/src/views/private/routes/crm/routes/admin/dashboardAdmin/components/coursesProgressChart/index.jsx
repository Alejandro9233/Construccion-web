import React, { useState, useEffect } from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { Row, Col, Progress, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { getBackendUrl } from "../../../../../../../../../utils/config";

const CoursesProgressChart = ({ user }) => {
  const context =
    "Lo que esta grafica representa es el progreso promedio de todos los cursos de los usuarios.";

  // Use state para guardar el progreso promedio global y use effect para fetchearlo
  // Datos de respuesta: promedio_porcentaje_avance_total
  const [averageProgress, setAverageProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${getBackendUrl()}/promedio-total-progreso`)
        .then((res) => res.json())
        .then((data) => {
          setAverageProgress(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [user]);

  let averageGlobalProgress =
    averageProgress.length > 0
      ? averageProgress[0].promedio_porcentaje_avance_total
      : 0;

  return (
    <StyledDiv>
      <div style={{ marginTop: "20px" }} />
      <StyledTitle>Average Courses Progress</StyledTitle>
      <Row style={{ width: "70%", textAlign: "center" }}>
        <StyledText>
          Here you can find the average course progress from all users{" "}
        </StyledText>
      </Row>

      <div style={{ marginTop: "50px" }} />
      <Progress
        type="circle"
        percent={averageGlobalProgress}
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
