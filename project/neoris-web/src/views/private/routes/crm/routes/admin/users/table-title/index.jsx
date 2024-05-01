import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { TitleContainer, StyledTitle, StyledButton } from "./elements";

const TableTitle = ({ showDrawer }) => {
  return (
    <TitleContainer>
          <StyledTitle style={{ margin: "auto 5px" }} level={3}>
            Usuarios
          </StyledTitle>

      <StyledButton
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        onClick={showDrawer}
      >
        Agregar Usuarios
      </StyledButton>
    </TitleContainer>
  );
};

export default TableTitle;
