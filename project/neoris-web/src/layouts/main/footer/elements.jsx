import styled from "styled-components";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterContainer = styled(Footer)`
  text-align: center;
  padding: 0;
  margin-bottom: 1vh;
  color: #a3aed0;
  font-family: "DM Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.28px;
  background: #fff;
`;

export { FooterContainer };
