import React from "react";
import { ImageBox, DefinitionBox } from "../../components/boxes";

const Medoc = () => (
  <>
    <h3>De la radiothérapie à la médecine nucléaire</h3>

    <p>
      Dans l'ombre des débats traitant des dangers du nucléaire et de la
      radioactivité, la medecine profite à plein régime de ces derniers.
    </p>
    <h4>Radiothérapie</h4>
    <p>
      Forme de traitement médical utilisant des rayonnements ionisants pour
      détruire les cellules cancéreuses ou pour inhiber leur croissance, la
      radiothérapie est aujourd'hui utilisée dans la lutte contre le cancer,
      mais est également utilisés pour traiter d'autres affections médicales
      telles que des troubles inflammatoires ou des maladies vasculaires. Cette
      technique de traitement, bien qu'ancienne, est encore très largmenent
      utilisé aujourd'hui.
    </p>
    <p>
      Le premier traitement documenté d'un patient par radiothérapie a eu lieu
      en 1896, peu de temps après la découverte des rayons X par Wilhelm Conrad
      Röntgen. Cependant, le traitement n'était pas spécifiquement dirigé contre
      le cancer, mais plutôt utilisé pour traiter des affections cutanées.
    </p>
    <p>
      La première utilisation de la radiothérapie pour traiter un cas de cancer
      a été documentée en 1903 par le physicien français Antoine Béclère. Il a
      traité un patient atteint d'un cancer cutané en utilisant des radiations
      émises par une source de radium. Bien que rudimentaire par rapport aux
      normes actuelles, ce traitement a ouvert la voie à l'utilisation de la
      radiothérapie dans le traitement du cancer.
    </p>
    <h4>Ambulances de Marie Curie</h4>
    <ImageBox
      side="right"
      title="Marie Curie au volant de son ambulance"
      src="Wikimedia (Public Domain)"
      url="/PACE/Marie_Curie_-_Mobile_X-Ray-Unit.jpg"
    />
    <p>
      À l'aube de la première Guerre mondiale, Marie Curie à recu
      l'autorisatation et la part du minstère de l'armée pour mettre en place
      des unités mobiles de soins, équipées de radiographies portatives. Ces
      ambulances, surnommées "Petites Curies", ont été utilisées pour détecter
      les blessures et les fractures chez les soldats sur le front.
    </p>
    <p>
      Mais elle ne se limita pas seulement à la détection des blessures. Elle
      traita les tissus affectés par les lésions, ouvrant ainsi la voie à une
      nouvelle ère dans la médecine militaire. Les rayons X, émis par les
      substances radioactives découvertes par Curie elle-même, ont démontré une
      efficacité remarquable dans la réduction des tumeurs et dans la
      destruction des cellules cancéreuses.
    </p>
    <p>
      L'héritage de Marie Curie dans le domaine de la radiothérapie perdure
      aujourd'hui, rappelant comment une scientifique dévouée a pu transformer
      une période de conflit en une opportunité de progrès médical. Sa vision et
      son courage ont ouvert la voie à des traitements oncologiques modernes,
      établissant la radiothérapie comme l'une des armes les plus puissantes
      dans la lutte contre le cancer, et ce, bien au-delà des champs de bataille
      de la Première Guerre mondiale.
    </p>
    <h4>Médecine nucléaire</h4>
    <p>
      La médecine nucléaire est une branche spécialisée de la médecine qui
      utilise des traceurs radioactifs pour diagnostiquer et traiter diverses
      affections médicales. Elle repose sur la détection et l'imagerie des
      radiations émises par ces traceurs lorsqu'ils sont introduits dans le
      corps.
    </p>
    <DefinitionBox side="right" title="Tomographie par émission de positions">
      La tomographie par émission de positons (TEP) est une technique d'imagerie
      médicale qui utilise la radioactivité pour visualiser l'activité
      métabolique des tissus à l'intérieur du corps. En injectant un traceur
      spécifique, le scanner TEP détecte les positrons émis, fournissant une
      image tridimensionnelle de la distribution du traceur. Cette technique est
      largement utilisée en oncologie pour diagnostiquer les cancers et évaluer
      la réponse au traitement, ainsi que dans d'autres domaines médicaux pour
      détecter diverses affections. La TEP offre une visualisation précise de la
      fonction des tissus, permettant une prise en charge clinique plus efficace
      des patients.
    </DefinitionBox>
    <p>
      Dans le domaine du diagnostic, la médecine nucléaire offre des techniques
      d'imagerie avancées telles que la tomographie par émission de positons
      (TEP) et la scintigraphie. Ces procédures permettent de visualiser les
      fonctions et les structures internes du corps avec une grande précision,
      facilitant ainsi le diagnostic précoce et la localisation précise de
      maladies telles que le cancer, les troubles cardiaques, les maladies
      osseuses et neurologiques, entre autres.
    </p>
    <p>
      En plus du diagnostic, la médecine nucléaire est également utilisée pour
      le traitement de certaines affections. Par exemple, la thérapie par
      radioisotopes est une technique où des substances radioactives sont
      administrées au patient pour cibler spécifiquement les cellules
      cancéreuses. Ces substances émettent des particules de haute énergie qui
      détruisent les cellules cancéreuses tout en minimisant les dommages aux
      tissus sains environnants.
    </p>
    <p>
      La médecine nucléaire joue un rôle crucial dans la médecine moderne en
      offrant des outils de diagnostic avancés et des options thérapeutiques
      innovantes. Elle permet une approche personnalisée du traitement en
      fournissant des informations précises sur la physiologie et le métabolisme
      des tissus, aidant ainsi les médecins à prendre des décisions éclairées
      pour la prise en charge des patients. En constante évolution, la médecine
      nucléaire continue de contribuer de manière significative aux progrès de
      la médecine et à l'amélioration des soins de santé.
    </p>
  </>
);

export default Medoc;
