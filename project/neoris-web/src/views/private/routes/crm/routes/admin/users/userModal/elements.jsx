import styled from "styled-components";
import { Button, Form } from "antd";

const StyledButton = styled(Button)`

`;

const StyledFormItem = styled(Form.Item)`
    margin: 0px;

    .custom-label {
        font-family: "DM Sans";
        color: #1B242A;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.28px;
    }
`;

export { StyledButton, StyledFormItem };
