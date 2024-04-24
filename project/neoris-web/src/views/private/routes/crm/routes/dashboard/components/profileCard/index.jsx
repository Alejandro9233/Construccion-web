import React from "react";
import { Image, Row, Col } from "antd";
import backgroundImg from "./ProfileBg.png";
import { StyledDiv, StyledImageDiv, StyledTitle, StyledText } from "./elements";

const ProfileCard = () => {
  return (
    <StyledDiv>
      <Image preview={false} src={backgroundImg} style={{ zIndex: 1 }} />
      <StyledImageDiv>
        <Image
          style={{ borderRadius: "50%", width: "5vw" }}
          preview={false}
          src={
            "https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds"
          }
        />
      </StyledImageDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledTitle>Sandro Castore</StyledTitle>
        <StyledText>Senior Developer</StyledText>
      </div>
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTitle>8</StyledTitle>
          <StyledText>Courses</StyledText>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTitle>9.7K</StyledTitle>
          <StyledText>Coins</StyledText>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTitle>274</StyledTitle>
          <StyledText>XP</StyledText>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ProfileCard;
