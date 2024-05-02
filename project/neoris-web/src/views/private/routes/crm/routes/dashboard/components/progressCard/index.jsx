import React, { useEffect, useState } from "react";
import { Image, Row, Button, Progress } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { StyledDiv, StyledImageDiv, StyledTitle, StyledText } from "./elements";
import Cloud from "./cloud_done.png";
import { getBackendUrl } from "../../../../../../../../utils/config";

const ProgressCard = ({ user }) => {
  // Use state para guardar el progreso promedio de los cursos inscritos y use effect para hacer fetch a la api y obtener el progreso
  // Contenidos de progress: {porcentaje_promedio}
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${getBackendUrl()}/promedio-avance/${user?.id_usuario}`)
        .then((res) => res.json())
        .then((data) => {
          setProgress(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [user]);

  // Obtener el porcentaje promedio de los cursos inscritos de la respuesta de la api para usarlos dentro del componente
  const percentage = progress.length > 0 ? progress[0].porcentaje_promedio : 0;

  return (
    <StyledDiv>
      <Row style={{ width: "100%" }} justify="end">
        <Button
          shape="circle"
          icon={<EllipsisOutlined />}
          style={{ border: "none" }}
        />
      </Row>
      <StyledImageDiv>
        <Image preview={false} src={Cloud} />
      </StyledImageDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <StyledTitle>Your Progress</StyledTitle>
        <StyledText>
          The easiest way to look at your average progress of all currently
          enrolled courses.
        </StyledText>
      </div>
      <Progress
        style={{ width: "80%", marginTop: "8%" }}
        percent={percentage}
        status="active"
        strokeColor={{
          from: "#90D7E7",
          to: "#108ee9",
        }}
      />
    </StyledDiv>
  );
};

export default ProgressCard;
