import { ImageBox } from "../../components/boxes/floating";
import SeuleSource from "./seulsrc";

const Chapter3 = () => {
  return (
    <div className="chapter-container">
      <h2>
        L'inscription du nucléaire dans une démarche respectueuse de
        l'environnement
      </h2>
      <h3>Seule source énergétique durable ?</h3>
      <SeuleSource />

      <h3>Des défis à relever</h3>
      <ImageBox
        url="PACE/chapter3/Deuterium-tritium_fusion.svg"
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
      <p>
        La fusion nucléaire, qui est le processus qui alimente le soleil, est
        souvent présentée comme une solution potentielle aux défis du nucléaire
        actuel. La fusion offre des avantages tels que des déchets réduits, une
        disponibilité quasi illimitée de combustible et des risques d'accident
        minimes. Cependant, malgré les progrès de la recherche, la fusion
        nucléaire est encore à un stade expérimental et nécessite d'importants
        investissements en recherche et développement avant de devenir une
        source d'énergie commerciale viable. En conclusion, bien que le
        nucléaire présente des avantages en termes d'émissions de gaz à effet de
        serre et de production d'énergie continue, il reste confronté à des
        défis importants tels que la gestion des déchets et la sécurité. La
        recherche continue sur des solutions telles que la fusion nucléaire
        pourrait permettre de surmonter ces défis et d'inscrire le nucléaire
        dans une démarche plus respectueuse de l'environnement.
      </p>
    </div>
  );
};

export default Chapter3;
