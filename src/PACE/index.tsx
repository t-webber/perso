import React from "react";

import TOC from "./global/toc";
import AvantPropos from "./global/pref";
import Introdution from "./global/intro";
import { Chapter1, Chapter2, Chapter3 } from "./chapters";
import Conclusion from "./global/concl";
import Bibliography from "./global/biblio";

import "./PACE.css";
import "./titles.css";

const PACE = () => (
  <div className="PACE">
    <h1>
      Nucléaire et radioactivité
      <br /> Solutions durables ou catastrophes inévitables
    </h1>
    <TOC />
    <div id="container">
      <AvantPropos />
      <Introdution />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Conclusion />
      <Bibliography />
    </div>
  </div>
);

export default PACE;
