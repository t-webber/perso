import TOC from "./components/global/toc.js";
import Introdution from "./components/global/intro.js";
import Chapter1 from "./chapters/chap1/chap1.js";
import Chapter2 from "./chapters/chap2/chap2.js";
import Chapter3 from "./chapters/chap3/chap3.js";
import Conclusion from "./components/global/concl.js";

import "./PACE.css";

const PACE = () => (
  <>
    <div className="App">
      <h1>
        Nucléaire et radioactivité
        <br /> Solutions durables ou catastrophes inévitable
      </h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header> */}
      <TOC />
      <div id="container">
        <Introdution />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Conclusion />
      </div>
    </div>
  </>
);

export default PACE;
