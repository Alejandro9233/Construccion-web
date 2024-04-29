import styled from "styled-components";
import { Typography, } from "antd";

const { Text } = Typography;

const StyledDiv = styled.div`
    border-radius: 20px;
    background: #FFF;
    box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 20px 20px 20px;
`;

const StyledText = styled(Text)`
    &.title {
        color: #1B2559;
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 166.667% */
        letter-spacing: -0.36px;
        margin-top: 3px;
    }

    &.subtitle {
        color: #A3AED0;
        font-family: "DM Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: -0.28px;
    }
`;

export { StyledDiv, StyledText };