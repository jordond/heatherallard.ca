import React from "react";
import { getSiteProps } from "react-static";
import glamorous from "glamorous";

import Buttons from "./home/buttons";
import GhostButton from "./home/ghostButton";

const mediaQueries = {
  phone: "@media only screen and (max-width: 400px)",
  desktop: "@media screen and (min-width: 900px)"
};

const HomeContent = glamorous.div({
  "& .content": {
    marginTop: "-2em",
    [mediaQueries.desktop]: {
      marginTop: "0"
    },
    color: "white",
    textAlign: "center",
    "& img": {
      display: "block",
      margin: "auto",
      marginBottom: "1em",
      maxWidth: "20em"
    },
    "& h1": {
      margin: "-0.1em auto",
      paddingBottom: "0.8em",
      textTransform: "uppercase",
      [mediaQueries.desktop]: {
        fontSize: "50px"
      },
      [mediaQueries.phone]: {
        fontSize: "30px"
      }
    },
    "& p": {
      margin: "-1em auto 1em",
      maxWidth: "21em",
      fontSize: "24px"
    }
  }
});

export default getSiteProps(() => (
  <HomeContent className="home-wrapper">
    <div className="content home-content">
      <h1>Heather Allard</h1>
      <GhostButton
        url="https://github.com/jordond/heatherallard.ca/raw/master/public/HeatherAllard-Resume.pdf"
        text="view resume"
        width="100"
        hoverColor="fe6c3d"
      />
      <Buttons />
    </div>
  </HomeContent>
));
