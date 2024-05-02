import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "@fontsource/dm-sans";
import { Button as AntButton, Typography, Form } from "antd";

const { Text: AntText } = Typography;

const StyledLink = styled(Link)`
    color: #0E46A3;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%;
    letter-spacing: -0.28px;
    text-decoration: none;
    
`;

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


const Button = styled(AntButton)`
    width: 450px;
    flex-shrink: 0;
    background: black;
    margin-top: 5px;
`;


export { Text, Button, StyledLink, StyledFormItem };