
import React from "react";
import { InnerDiv, StyledTitle, StyledText, StyledDiv } from "./elements";
import { Row, Col } from "antd";

const InfoElement = ({ infoArray }) => {
  // Divide el array de información en grupos de 2
  const groupedInfo = [];
  for (let i = 0; i < infoArray.length; i += 2) {
    groupedInfo.push(infoArray.slice(i, i + 2));
  }

  return (
    <>
      {groupedInfo.map((group, index) => (
        <Row
          key={index}
          style={{ width: "100%", padding: "6px" }}
          justify="space-between"
        >
          {group.map((info, index) => (
            <Col span={11} key={index}>
              <InnerDiv>
                <StyledText style={{ fontSize: "14px" }}>
                  {info.title}
                </StyledText>
                <StyledTitle
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "100%",
                  }}
                >
                  {info.content}
                </StyledTitle>
              </InnerDiv>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

const InfoCard = ({user}) => {
  const description =
    "The easiest way to look at your general information working at Neoris and contact details.";
  const infoArray = [
    { title: "E-mail", content: user.e_mail},
    { title: "Chat", content: user.e_mail},
    { title: "Location", content: user.ubicacion },
    { title: "Organization", content: "Neoris" },
    { title: "Department", content: user.departamento },
    { title: "Job Position", content: user.puesto },
  ];

  return (
    <StyledDiv>
      <StyledTitle>General Information</StyledTitle>
      <StyledText style={{ marginTop: "10px" }}>{description}</StyledText>
      <div style={{ marginTop: "20px" }} />
      <InfoElement infoArray={infoArray} />
    </StyledDiv>
  );
};

export default InfoCard;
