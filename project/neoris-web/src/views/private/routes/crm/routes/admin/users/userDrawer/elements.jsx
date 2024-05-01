import styled from "styled-components";
import { Form, Button } from "antd";

const StyledButton = styled(Button)`
    font-family: "DM Sans";
    background: #1B242A;
`;

const StyledFormItem = styled(Form.Item)`
    margin: 3px;

    .custom-label {
        font-family: "DM Sans";
        color: #1B242A;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.28px;
    }
`

export { StyledFormItem, StyledButton };