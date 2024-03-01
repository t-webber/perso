// \\subsection\{(.+?)\}

import DecouvXX from "./decouvXX";
import Medoc from "./medoc";

const Chapter1 = () => {
  return (
    <div className="chapter-container">
      <h2>Découverte d'une source d'énergie prometteuse</h2>
      <h3>Découvertes scientifiques du début du XXe</h3>
      <DecouvXX />
      <h3>De la radiothérapie à la médecine nucléaire</h3>
      <Medoc />
    </div>
  );
};

export default Chapter1;
