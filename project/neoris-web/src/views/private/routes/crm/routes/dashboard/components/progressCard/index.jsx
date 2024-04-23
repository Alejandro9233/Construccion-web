import React from "react";
import { Image, Row, Button, Progress } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { StyledDiv, StyledImageDiv, StyledTitle, StyledText } from "./elements";
import Cloud from "./cloud_done.png";

const ProgressCard = () => {
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
        percent={87}
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
