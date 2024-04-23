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

const InfoCard = () => {
  const description =
    "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...";

  const infoArray = [
    { title: "Education", content: "TEC University" },
    { title: "Languages", content: "English, Spanish, Italian" },
    { title: "Department", content: "Product Design" },
    { title: "Work History", content: "FEMSA, CEMEX" },
    { title: "Organization", content: "Neoris" },
    { title: "Birthday", content: "20 July 2000" },
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
