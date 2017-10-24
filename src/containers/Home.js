import React from "react";
import { getSiteProps } from "react-static";
import glamorous from "glamorous";

import logoImg from "../logo.png";

const LogoImage = glamorous.img({
  maxWidth: "100%"
});

export default getSiteProps(() => (
  <div>
    <h1 style={{ textAlign: "center" }}>Welcome to</h1>
    <LogoImage src={logoImg} alt="" />
  </div>
));
