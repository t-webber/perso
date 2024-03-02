import React from "react";

import TOC from "./global/toc.tsx";
import AvantPropos from "./global/pref.tsx";
import Introdution from "./global/intro.tsx";
import Chapter1 from "./chapters/chap1/chap1.tsx";
import Chapter2 from "./chapters/chap2/chap2.tsx";
import Chapter3 from "./chapters/chap3/chap3.tsx";
import Conclusion from "./global/concl.tsx";
import Bibliography from "./global/biblio.tsx";

import "./PACE.css";
import "./titles.css";

const PACE = () => (
  <div className="PACE">
    <h1>
      Nucléaire et radioactivité
      <br /> Solutions durables ou catastrophes inévitable
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
