import styled from "styled-components";
import { Menu as CommonMenu, Typography } from "antd";

const { Text: AntText } = Typography;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  height: 98vh;
  border-radius: 30px;
  background: #fff;
  box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
`;

const Menu = styled(CommonMenu)`
  .ant-menu-item-group-list .ant-menu-item {
    font-size: 15px;
  }
`;

const Text = styled(AntText)`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.03em;
  color: ${(props) => (props.selected ? "white" : "#010202")};
`;

export { Menu, Text, Container };
