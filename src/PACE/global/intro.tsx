import React from "react";

import Sc from "../components/styles";

const Introduction = () => {
  return (
    <div className="chapter-container">
      <span className="h2">Introduction</span>
      <p>
        Le nucléaire, source d'énergie controversée, divise les opinions et
        engendre des débats. Promesse d'une énergie propre et efficace pour
        certains, menace pour la sécurité et l'environnement pour d'autres, son
        histoire est complexe et ses enjeux, multiples.
      </p>
      <p>
        L'histoire de la radioactivité débute au début du <Sc str="XX" /> avec
        des avancées majeurs en physique, puis débouche sur l'énergie nucléaire
        à l'aube de la Seconde Guerre Mondiale. Pendant cette dernière, les
        technologies nucléaires ont connu un développement fulgurant, ponctué de
        succès technologiques et de tragédies majeures. De Tchernobyl à
        Fukushima, en passant par Hiroshima et Nagasaki, les catastrophes
        nombreuses alimentent la méfiance envers cette technologie très
        prometteuse mais dangereuse.
      </p>
      <p>
        Face à l'urgence climatique et à la nécessité de réduire notre émission
        de gaz à effets de serre, le nucléaire se présente comme une alternative
        majeur. Son bilan carbone est quasi nul, son utilisation ne dépend pas
        des conditions météorologiques, et ses réserves de combustible sont
        largement supérieures à toutes les autres, dont le silicium des panneaux
        photovoltaïque.
      </p>
      <p>
        Cependant, les défis et les risques associés au nucléaire ne peuvent pas
        être ignorés. La gestion des déchets radioactifs, la sécurité des
        installations nucléaires, et le risque de contamination radioactive
        constituent des obstacles majeurs à son développement à grande échelle.
      </p>
      <p>
        En outre, l'acceptabilité sociale du nucléaire est loin d'être acquise.
        Les populations locales s'opposent souvent à l'installation de centrales
        nucléaires sur leur territoire, craignant les dangers potentiels et les
        nuisances environnementales.
      </p>
      <p>
        Dans ce contexte complexe et incertain, la question du nucléaire se pose
        avec une acuité nouvelle. Faut-il y voir une solution durable aux
        problèmes environnementaux ou une technologie dangereuse et insoutenable
        ?
      </p>
      <p>
        C'est à cette question que cet ouvrage tente de répondre. En explorant
        les différentes dimensions du nucléaire, ses potentialités et ses
        risques, nous espérons éclairer les choix qui nous attendent et nourrir
        un débat citoyen éclairé. Car c'est bien en comprenant les enjeux du
        nucléaire que nous pourrons construire un avenir énergétique responsable
        et durable.
      </p>
    </div>
  );
};

export default Introduction;
