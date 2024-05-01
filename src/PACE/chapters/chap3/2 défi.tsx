import { ImageBox, NoteBox, DefinitionBox } from "../../components/boxes";

const Defis = () => {
  return (
    <>
      <h3>Des défis à relever</h3>
      <h4>Les déchets radioactifs</h4>
      <ImageBox
        url="/PACE/Deuterium-tritium_fusion.png"
        side="right"
        title="Schéma explicatif de la fusion nucléaire"
        src="Wykis, (Wikimedia, Public Domain)"
        style={{ marginLeft: "50px", marginBottom: "30px" }}
      />
      <p>
        La gestion des déchets radioactifs constitue l'un des enjeux majeurs de
        l'industrie nucléaire. Les réacteurs nucléaires engendrent une variété
        de déchets hautement radioactifs, caractérisés par une persistance
        dangereuse sur des échelles de temps pouvant atteindre plusieurs
        milliers voire millions d'années. Cette réalité impose la mise en œuvre
        impérative de dispositifs de stockage à long terme, robustes et
        sécurisés.
      </p>
      <p>
        Parmi les solutions envisagées pour relever ce défi, le concept de
        stockage géologique profond émerge comme une piste sérieuse. Ce schéma
        préconise l'immersion des déchets radioactifs dans des formations
        géologiques stables et isolées, localisées à des profondeurs
        conséquentes sous la surface terrestre. L'objectif est d'assurer un
        confinement hermétique de ces matériaux, afin de minimiser au maximum
        les risques potentiels de contamination environnementale et humaine.
        Néanmoins, malgré les bénéfices apparents de cette approche, des
        préoccupations persistent quant à sa sécurité à long terme. En effet,
        l'éventualité de fuites radioactives ou de contaminations des nappes
        phréatiques soulève des interrogations sur la pérennité de ces
        dispositifs sur le long terme. Par ailleurs, la question de
        l'acceptabilité sociale représente un défi d'ampleur, avec de nombreuses
        collectivités exprimant des réserves quant à l'implantation
        d'installations de stockage de déchets nucléaires à proximité de leurs
        lieux de résidence.
      </p>
      <h4>La fusion, une solution ?</h4>
      <p>
        La fusion nucléaire, qui est le processus qui alimente le soleil, est
        souvent présentée comme une solution potentielle aux défis du nucléaire
        actuel. En effet, la fusion est une source d'énergie sans déchets, de
        disponibilité quasi illimitée puisqu'elle ne nécessite que de l'eau et
        des risques d'accident minimes.
      </p>
      <DefinitionBox
        title="La fusion"
        side="none"
        style={{
          maxWidth: "100%",
          clear: "both",
          paddingTop: "5px",
        }}
      >
        La fusion nucléaire est un processus où les noyaux légers d'hydrogène,
        tels que le deutérium et le tritium, fusionnent pour former des noyaux
        plus lourds, libérant ainsi une quantité massive d'énergie. Pour recréer
        cette réaction sur Terre, le projet ITER utilise un plasma, un gaz
        d'ions et d'électrons, chauffé à des températures extrêmes, souvent
        supérieures à 100 millions de degrés Celsius.
      </DefinitionBox>
      <p>
        Cependant, malgré les progrès de la recherche, la fusion nucléaire est
        encore à un stade expérimental et nécessite d'importants investissements
        en recherche et développement avant de devenir une source d'énergie
        commerciale viable. En effet, afin que la fusion se produise, il faut
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
