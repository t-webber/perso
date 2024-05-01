import React from "react";

import TOC from "./global/toc";
import AvantPropos from "./global/pref";
import Introdution from "./global/intro";
import { Chapter1, Chapter2, Chapter3, Chapter0 } from "./chapters";
import Conclusion from "./global/concl";
import Bibliography from "./global/biblio";

import "./PACE.css";
import "./titles.css";

const PACE = () => (
  <div className="PACE">
    {/* <h1>
      Nucléaire et radioactivité
      <br /> Solutions durables ou catastrophes inévitables
    </h1> */}
    <TOC />
    <div id="container">
      <AvantPropos />
      <Introdution />
      <div className="change-page"></div>
      <Chapter0 />
      <div className="change-page"></div>
      <Chapter1 />
      <Chapter2 />
      <div style={{ paddingTop: "80px", clear: "both" }}></div>
      <Chapter3 />
      <div className="spacing"></div>
      <Conclusion />
      <div className="spacing"></div>
      <Bibliography />
    </div>
  </div>
);

export default PACE;
