import React, { useState } from "react";
import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Tooltip, Typography, Button } from "antd";
import { DescriptionContainer, TitleContainer } from "./elements";

const { Title } = Typography;

const description = `
Usuarios
`;

const TableTitle = () => {
  return (
    <TitleContainer>
      <Tooltip autoAdjustOverflow placement="rightTop" title={description}>
        <DescriptionContainer style={{ marginRight: 20 }}>
          <Title style={{ margin: "auto 5px" }} level={3}>
            Usuarios
          </Title>
          <InfoCircleOutlined />
        </DescriptionContainer>
      </Tooltip>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginLeft: "20px" }}
        onClick={() => {
          console.log("Agregar Usuarios");
        }}
      >
        Agregar Usuarios
      </Button>
    </TitleContainer>
  );
};

export default TableTitle;
