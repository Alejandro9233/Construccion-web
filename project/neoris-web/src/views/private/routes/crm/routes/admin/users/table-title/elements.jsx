import styled from "styled-components";
import { Typography, Button as AntButton } from "antd";

const { Title: AntTitle } = Typography;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 0px;
`;

const StyledTitle = styled(AntTitle)`
  color: #1B242A;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 155.556% */
`;

const StyledButton = styled(AntButton)`
  background-color: #1B242A;
`;



export { TitleContainer, StyledButton, StyledTitle};
