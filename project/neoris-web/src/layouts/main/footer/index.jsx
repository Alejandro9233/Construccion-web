import React from "react";
import { FooterContainer } from "./elements";

const Footer = () => {
  return (
    <FooterContainer style={{ textAlign: "center" }}>
      <div id="copyright">{`© 2024 NEORIS UI. All Rights Reserved. Made with love by ITESM!`}</div>
    </FooterContainer>
  );
};

export default Footer;
