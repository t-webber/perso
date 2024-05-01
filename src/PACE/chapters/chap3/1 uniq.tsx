import { FactBox } from "PACE/components/boxes";
import React from "react";

const SeuleSource = () => {
  return (
    <>
      <h3>Seule source énergétique durable ?</h3>
      <p>
        Face à l'urgence climatique et à la nécessité de réduire notre
        dépendance aux énergies fossiles, l'éolien et le photovoltaïque se
        présentent comme des alternatives prometteuses. Cependant, une analyse
        approfondie révèle que leur adoption à grande échelle comme solution
        unique relève de l'utopie, car ces énergies nouvelles se heurtent à des
        défis majeurs en termes de coût, de production et d'impact
        environnemental.
      </p>

      <FactBox title="Comparaison énergétique" side="right">
        En moyenne, en France, un réacteur nucléaire produit en moyenne 10
        millions de GWh. En comparaison, une éolienne produit en moyenne 10 000
        MW sur le territoire français, donc il faudrait plus de 1000 éoliennes
        et un vent soufflant de façon ininterrompue pour égaler la puissance
        d'un seul réacteur nucléaire, alors que leur taille est très similaire.
        La comparaison est encore plus flagrante avec les panneaux solaires.
      </FactBox>
      <h4>Les solutions utopiques de l'éolien et du solaire</h4>

      <p>
        De prime abord, l'installation et la maintenance des éoliennes et des
        panneaux solaires nécessitent des investissements colossaux. Le coût de
        production de l'énergie éolienne et photovoltaïque reste élevé par
        rapport aux sources traditionnelles, malgré les progrès technologiques.
        La dépendance aux subventions publiques pour maintenir la compétitivité
        de ces technologies fragilise leur viabilité à long terme et soulève des
        questions d'équité financière.
      </p>
      {/* <h5>L'intermittence, un défi permanent</h5> */}
      <p>
        De plus, la production d'énergie éolienne et photovoltaïque est
        intrinsèquement variable et dépendante des conditions météorologiques.
        Le manque de vent ou d'ensoleillement peut entraîner des baisses de
        production significatives, créant une instabilité dans le réseau
        électrique. De plus, l'être humain est incapable de stocker efficacement
        de l'énergie encore aujourd'hui, ce qui renforce l'enjeu de
        l'intermittence. Le besoin d'énergie ne doit pas dépendre des conditions
        météorologiques, mais bien être stable et fiable. Contrairement à
        l'éolien et au solaire, le nucléaire a la capacité à être indépendant de
        ces conditions.
      </p>
      {/* <h5>Un impact environnemental non négligeable</h5> */}
      {/* <DefinitionBox title="L'effet d'îlot de chaleur" side="left">
        L'effet d'îlot de chaleur urbain est un phénomène où les zones urbaines
        sont significativement plus chaudes que les rurales environnantes.
        L'intégration de panneaux photovoltaïques peut influencer cet effet de
        plusieurs façons. Tout d'abord, les panneaux absorbent une partie du
        rayonnement solaire, réduisant ainsi l'absorption de chaleur par les
        surfaces urbaines exposées au soleil. De plus, ils peuvent refléter une
        partie de la lumière solaire, contribuant à la réduction de
        l'accumulation de chaleur. Cependant, leur impact direct sur la
        température locale est généralement considéré comme limité par rapport à
        d'autres facteurs tels que la densité urbaine, la végétation et les
        activités humaines. En outre, en produisant de l'électricité à partir de
        sources renouvelables, les panneaux photovoltaïques peuvent contribuer à
        la réduction des émissions de gaz à effet de serre, avec des
        implications positives à long terme pour le climat urbain.
      </DefinitionBox> */}
      <p>
        Enfin, l'installation d'éoliennes et de panneaux solaires peut avoir un
        impact négatif sur les paysages et la biodiversité. En effet, de
        nombreux parcs photovoltaïques et éoliens sont construits en abattant
        des forêts, comme le montre l'exemple du champ de panneaux solaires
        d'Estézargues. Par ailleurs, la fabrication et le recyclage de ces
        technologies nécessitent l'utilisation de ressources naturelles et de
        substances polluantes. L'impact sonore des éoliennes peut nuire à la
        qualité de vie des riverains. L'acceptabilité sociale de ces
        technologies devient alors un enjeu crucial.
      </p>
      <h4>Production efficace et propre</h4>
      <p>
        Le nucléaire présente des atouts indéniables en tant que source
        d'énergie dense et constante. Les centrales nucléaires sont capables de
        produire d'énormes quantités d'électricité tout en émettant relativement
        peu de dioxyde de carbone une fois qu'elles sont en activité. Ces
        caractéristiques en font une option attrayante pour répondre à la
        demande croissante en énergie, tout en limitant les émissions de gaz à
        effet de serre. Par ailleurs, les progrès technologiques continus ont
        permis d'améliorer la sûreté et l'efficacité des réacteurs nucléaires.
        Ces avancées ont contribué à réduire les risques potentiels pour
        l'environnement et la sécurité, renforçant ainsi la viabilité à long
        terme de cette source d'énergie. En conséquence, le nucléaire demeure
        une composante essentielle de nombreux plans énergétiques nationaux et
        internationaux, offrant une alternative crédible aux combustibles
        fossiles tout en contribuant à la transition vers une économie à faibles
        émissions de carbone.
      </p>
    </>
  );
};

export default SeuleSource;
