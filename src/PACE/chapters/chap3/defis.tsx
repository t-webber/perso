import React from "react";
import { ImageBox, NoteBox, DefinitionBox } from "../../components/boxes";

const Defis = () => {
  return (
    <>
      <ImageBox
        url="/PACE/Deuterium-tritium_fusion.png"
        side="right"
        title="Schéma explciatif de la fusion nucléaire"
        src="Wykis, (Wikimedia, Public Domain)"
      />
      <h4>Les déchets radioactifs</h4>
      <p>
        L'un des principaux défis du nucléaire est la gestion des déchets
        radioactifs produits par les centrales nucléaires. Ces déchets restent
        dangereux pendant des milliers d'années et nécessitent des mesures de
        stockage à long terme. Des solutions telles que le stockage géologique
        profond sont étudiées, mais présentent encore des préoccupations en
        termes de sécurité à long terme et d'acceptabilité sociale.
      </p>
      <h4>La fusion, une solution ?</h4>
      <DefinitionBox title="La fusion" side="left">
        La fusion nucléaire est un processus où les noyaux légers d'hydrogène,
        tels que le deutérium et le tritium, fusionnent pour former des noyaux
        plus lourds, libérant ainsi une quantité massive d'énergie. Pour recréer
        cette réaction sur Terre, le projet ITER utilise un plasma, un gaz
        d'ions et d'électrons, chauffé à des températures extrêmes, souvent
        supérieures à 100 millions de degrés Celsius.
      </DefinitionBox>
      <p>
        La fusion nucléaire, qui est le processus qui alimente le soleil, est
        souvent présentée comme une solution potentielle aux défis du nucléaire
        actuel. En effet, la fusion est une source d'énergie sans déchets, de
        disponibilité quasi illimitée puisqu'elle ne nécessite que de l'eau et
        des risques d'accident minimes.
      </p>
      <p>
        Cependant, malgré les progrès de la recherche, la fusion nucléaire est
        encore à un stade expérimental et nécessite d'importants investissements
        en recherche et développement avant de devenir une source d'énergie
        commerciale viable. En effet, afin que la fusion se produisent, il faut
        des conditions de température et de pression extrêmes, ce qui rend la
        réalisation de la fusion difficile et coûteuse en énergie et en argent.
      </p>
      <NoteBox title="Le projet ITER">
        <>
          <p>
            Situé à Cadarache, en France, ITER représente une collaboration
            internationale ambitieuse entre 35 pays. Son objectif est de
            construire un réacteur de fusion nucléaire à grande échelle. Le
            plasma est maintenu en suspension dans une enceinte magnétique grâce
            à un champ magnétique puissant généré par des aimants
            supraconducteurs.
          </p>
          <p>
            Une fois que le plasma atteint les conditions de fusion, les noyaux
            d'hydrogène fusionnent, libérant des neutrons et une énorme quantité
            d'énergie sous forme de chaleur. Cette chaleur est ensuite convertie
            en électricité à l'aide de turbines.
          </p>
          <p>
            Le projet ITER vise à démontrer la faisabilité technologique de la
            fusion nucléaire en produisant plus d'énergie de fusion qu'il n'en
            faut pour chauffer et maintenir le plasma. Bien que le projet soit
            encore en construction, il offre un espoir pour une source d'énergie
            propre, sûre et pratiquement inépuisable pour l'avenir de
            l'humanité.
          </p>
        </>
      </NoteBox>
    </>
  );
};

export default Defis;
