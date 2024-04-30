import styled from "styled-components";
import { Form, Typography } from "antd";

const { Text: AntText } = Typography;

const StyledFormItem = styled(Form.Item)`
    margin: 3px;
`

const Text = styled(AntText)`
    font-family: "DM Sans";

    &.title {
        color: #1B242A;
        font-size: 40px;
        font-weight: 700;
        line-height: 56px; 
    }

    &.subtitle {
        color: #A3AED0;
        font-size: 18px;
        font-weight: 400;
        line-height: 100%; 
    }

    &.text {
        color: #1B242A;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.28px;
    }
`;

export { Text, StyledFormItem };