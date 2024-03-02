// \\subsection\{(.+?)\}

import Guerre from "./guerre";
import Cata from "./cata";

const Chapter2 = () => {
  return (
    <div className="chapter-container">
      <h2>Désastres nucléaires</h2>
      <p>
        L'énergie nucléaire, malgré ses avantages, est souvent perçue comme
        dangereuse en raison des incidents passés. Cette perception de risque a
        profondément marqué les esprits. Les accidents nucléaires majeurs comme
        ceux de Tchernobyl et Fukushima ont laissé des traces indélébiles dans
        la mémoire collective et ont souligné la nécessité d'une gestion
        rigoureuse et prudente de cette technologie.
      </p>
      <h3>Finir une guerre mondiale</h3>
      <Guerre />
      <h3>De la production d'énergie aux catastrophes nucléaires</h3>
      <Cata />
    </div>
  );
};

export default Chapter2;
