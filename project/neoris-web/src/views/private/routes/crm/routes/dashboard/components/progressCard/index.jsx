import React, { useEffect, useState } from "react";
import { Image, Row, Button, Progress } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { StyledDiv, StyledImageDiv, StyledTitle, StyledText } from "./elements";
import Cloud from "./cloud_done.png";

const ProgressCard = () => {
  // conseguir promedio de usuario
  const [progress, setProgress] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      await fetch("http://localhost:5000/promedio-avance/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProgress(data);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    
    fetchData();

  }, []);

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
          The easiest way to look at your currently course progress
        </StyledText>
      </div>
      <Progress
        style={{ width: "80%", marginTop: "8%" }}
        percent= {percentage}
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
