import React from "react";

import {
  DefinitionBox,
  ImageBox,
  NoteBox,
  FactBox,
} from "../../components/boxes";

const DecouvXX = () => {
  return (
    <div>
      {/* <h3>Histoire et découvertes scientifiques</h3> */}
      <DefinitionBox side="right" title="Thermodynamique">
        <>
          La thermodynamique est la branche de la physique qui étudie les
          échanges mécaniques (mouvement) et calorifiques (chaleur). Tirant son
          étymolgie des mots θερμός (thermos, signifiant <em>chaleur</em>) et
          δύναμις (dynamis, signifiant <em>puissance</em>), le mot
          thermodynamique a été introduit en 1864, par le physicien écossais
          William Thomson (Lord Kelvin).
        </>
      </DefinitionBox>
      <div className="blockquote">
        Il n'y a plus rien à découvrir en physique aujourd'hui, tout ce qui
        reste est d'améliorer la précision des mesures.
      </div>
      <p>
        Tel fut le propos que tenait Lord Kelvin en 1900. Ce dernier est
        révélateur de la confiance que les scientifiques de l'époque avaient
        dans leur compréhension du monde. Des lois paraissant inébranlables
        expliquaient entièrement le monde, avec les lois de Newton qui
        régissaient le mouvement des objets, les lois de Maxwell qui régissaient
        l'électricité et le magnétisme et avec trois principes qui régissaient
        la thermodynamique. Il semblait que tout était en place pour que la
        science puisse se concentrer sur l'amélioration des mesures et de la
        précision. Cependant, les années qui ont suivi ont montré que Kelvin se
        trompait.
      </p>
      <div style={{ height: "40px" }}></div>
      <h3>Découverte de la radioactivité</h3>
      <ImageBox
        url="/PACE/becquerel.jpg"
        side="left"
        title="Henri Becquerel"
        src="©2001-2023 Futura-Sciences"
      />
      <p>
        <h4>Les découvertes de Henri Becquerel</h4>
        En 1896, le physicien français Henri Becquerel travaillait sur la
        phosphorescence, un phénomène par lequel certaines substances émettent
        de la lumière après avoir été exposées à la lumière. Il a exposé des
        sels d'uranium à la lumière du soleil, puis les a placés dans une
        chambre noire avec une plaque photographique. Il a découvert que la
        plaque photographique était brumeuse, même si les sels n'étaient pas
        exposés à la lumière.
      </p>
      <p>
        Becquerel a d'abord pensé que la phosphorescence était responsable de
        l'apparition d'une image sur la plaque photographique. Cependant, il a
        réalisé plus tard que l'image apparaissait même si les sels n'étaient
        pas exposés à la lumière. Il a conclu que les sels d'uranium émettent
        spontanément des rayons qui peuvent traverser la matière et
        impressionner une plaque photographique. Becquerel a nommé ces rayons
        &laquo;&nbsp;rayons uraniques&nbsp;&raquo;. Il a également découvert que
        les rayons uraniques pouvaient ioniser l'air, ce qui signifie qu'ils
        pouvaient provoquer la séparation des charges électriques. Les travaux
        de Becquerel ont été poursuivis par Marie et Pierre Curie, qui ont
        découvert deux nouveaux éléments radioactifs, le polonium et le radium.
        Ils ont également mis au point une méthode pour isoler le radium, qui
        est un élément très radioactif.
      </p>
      <div style={{ height: "40px" }}></div>
      <NoteBox title="Méthode pour isoler du radium">
        La première étape consiste à extraire chimiquement l'uranium de la
        pechblende, un minerai qui contient de l'uranium et du radium. Une fois
        l'uranium extrait, il est nécessaire de le séparer du radium. Pour se
        faire, les Curie ont utilisé une méthode appelée « chimie radioactive »
        s'appuyant sur le fait que les éléments radioactifs émettent des rayons
        ionisants, qui peuvent être détectés par des appareils spéciaux. Ils ont
        ensuite fait usage d'un appareil appelé « électroscope » pour détecter
        les rayons ionisants. Ils ont placé l'uranium dans un électroscope et
        ont observé que l'aiguille de l'électroscope se déplaçait, ce qui
        indiquait que l'uranium émettait des rayons ionisants. Après ce constat,
        Pierre et Marie Curie ont mis en &oelig;uvre un procédé appelé «
        chromatographie » pour séparer le radium de l'uranium - la
        chromatographie est une technique qui permet de séparer des substances
        en fonction de leur solubilité. En utilisant cette méthode, et après
        plusieurs étapes de purification, ils ont finalement obtenu une quantité
        de radium pur. Cette quantité était très faible, seulement quelques
        milligrammes de radium pour quatre cents tonnes de pechblende.
      </NoteBox>
      {/* <div style={{ height: "50px" }}></div> */}
      {/* <FactBox side="right" title="Fait historique" style={{ width: "30%" }}>
        Becquerel avait découvert la radioactivité en 1896, mais il ne savait
        pas encore ce qu'était ce phénomène. Marie Curie a repris ses travaux et
        a découvert que la radioactivité était due à l'émission d'énergie par
        certains éléments, comme l'uranium et le radium.
      </FactBox> */}
      {/* <div style={{ clear: "both" }}></div> */}
      <div className="change-page"></div>
      <h4>Les découvertes de Pierre et Marie Curie</h4>
      <div style={{ display: "flex", flexDirection: "row", clear: "both" }}>
        <ImageBox
          url="/PACE/nobel.jpg"
          side="left"
          title="Médaille du prix Nobel"
          src="Jonathunder, Medal: Erik Lindberg, (Wikimedia, Public Domain)"
          style={{ width: "25%", marginRight: "60px" }}
        />

        <div style={{ width: "100%" }}>
          <FactBox
            side="right"
            title="Fait historique"
            style={{ marginLeft: "60px", marginBottom: "70px" }}
          >
            Marie Curie est devenue la première femme à recevoir un prix Nobel,
            et la seule à en recevoir deux, dans deux disciplines différentes.
          </FactBox>
          <p>
            En 1903, Marie et Pierre Curie, ainsi qu'Henri Becquerel, ont reçu
            le prix Nobel de physique pour leurs travaux sur la radioactivité.
          </p>
          <p>
            La découverte de la radioactivité par Marie et Pierre Curie a été
            une étape importante dans l'histoire de la science. Elle a conduit
            au développement de nouvelles technologies, telles que la
            radiothérapie et la médecine nucléaire, dont nous parlerons plus
            loin.
          </p>
        </div>
      </div>
      <h3>Grandes avancées en physique des particules</h3>
      Les travaux des Curie ont montré que la radioactivité était due à des
      processus qui se déroulaient au sein des atomes. Cependant, la nature
      exacte du noyaux atomique était encore inconnue.
      {/* <div style={{ clear: "both" }}></div> */}
      <ImageBox
        url="\PACE\Geiger-Marsden_experiment_expectation_and_result__French_.png"
        side="right"
        title="Expérience de Rutherford"
        src="Kurzon (Wikimedia, Creative Commons Attribution-Share Alike 3.0)"
      />
      <h4>La découverte des particules subatomiques</h4>
      <p>
        Ernest Rutherford, un physicien néo-zélandais du début du XX
        <sup>e</sup>
        siècle considéré comme l'un des pères de la physique nucléaire et de la
        chimie nucléaire, a ouvert la voie à la découverte de nouvelles
        particules subatomiques. Rutherford est principalement connu pour son
        expérience de la feuille d'or, menée en 1909. Cette expérience a permis
        de démontrer que la matière est constituée d'un noyau dense et chargé
        positivement, entouré d'électrons chargés négativement. Ce modèle
        atomique, appelé modèle de Rutherford, a révolutionné notre
        compréhension de la structure de la matière.
      </p>
      <h4>Les premiers modèles du noyau atomique</h4>
      <ImageBox
        url="/PACE/480px-Rutherford_atomic_planetary_model.svg.png"
        // url="/PACE/noble.jpg"
        side="left"
        title=""
        src="Bensteele1995 (Wikimedia, Creative Commons Attribution-Share Alike 3.0)"
      />
      <p>
        À cette époque, la structure de l'atome était décrite par le modèle de
        Thomson, qui supposait que l'atome était une sphère de matière chargée
        positivement, avec des électrons chargés négativement répartis
        uniformément à l'intérieur. Cependant, cette théorie ne pouvait pas
        expliquer les résultats de l'expérience de Rutherford, qui montraient
        que certaines particules &alpha; étaient déviées de leur trajectoire
        lorsqu'elles traversaient une feuille d'or.
      </p>
      <h4>Structure atomique selon Rutherford</h4>
      <p>
        L'expérience de Rutherford a permis de mettre en évidence que la masse
        et la charge positive de l'atome sont concentrées dans un noyau central,
        tandis que les électrons sont répartis autour du noyau sur des orbites
        circulaires. Ce modèle, appelé modèle planétaire du fait de sa
        ressemblance avec la structure du système solaire, est encore utilisé
        aujourd'hui. Le modèle atomique de Rutherford a eu un impact profond sur
        la science. Il a permis de comprendre la structure et les propriétés des
        atomes, et a ouvert la voie au développement de la chimie nucléaire et
        de la physique nucléaire. Pour ses contributions à la science,
        Rutherford a reçu le prix Nobel de chimie en 1908. En 1932, le physicien
        britannique James Chadwick a découvert le neutron, une particule sans
        charge électrique. En 1932 également, le physicien américain Carl
        Anderson a découvert le positron, une particule identique à l'électron
        mais chargée positivement. Ces découvertes ont permis de comprendre que
        le noyau atomique était constitué de protons, de neutrons et
        d'électrons. Elles ont également ouvert la voie à la découverte d'autres
        particules subatomiques.
      </p>
      {/* <ImageBox
        url="/PACE/Nuclear_fission.png"
        side="right"
        title="Schéma expliquant la fission nucléaire"
        src="Wikimedia (Public domain)"
      /> */}
      <h3>Découverte de la fission nucléaire</h3>
      <h4>Histoire...</h4>
      <DefinitionBox title="Matière noire" side="left">
        La matière noire est une forme de "matière" qui ne rayonne ni n'absorbe
        de lumière. Elle n'est donc pas détectable directement par les méthodes
        traditionnelles d'observation astronomique. Son existence a été postulée
        pour expliquer divers phénomènes observés dans l'univers, notamment les
        vitesses de rotation des galaxies, les mouvements des étoiles au sein
        des galaxies et les effets de lentille gravitationnelle. On estime que
        la matière noire constitue environ un tiers de l'univers observable.
      </DefinitionBox>
      <p>
        Dans les années 1950 et 1960, les physiciens ont découvert de nombreuses
        particules subatomiques, jusqu'alors inconnues. Ces découvertes ont
        conduit au développement du modèle standard de la physique des
        particules, qui est un modèle théorique qui décrit les interactions
        entre les particules subatomiques. Le modèle standard est un modèle très
        réussi qui a permis de prédire avec précision de nombreuses propriétés
        des particules subatomiques. Cependant, il existe encore des questions
        auxquelles il ne répond pas, telle que la nature de la matière noire.
      </p>
      <p>
        La découverte de la fission nucléaire est une histoire qui a commencé en
        1938, lorsque les physiciens allemands Otto Hahn et Fritz Strassmann ont
        découvert que l'uranium pouvait se diviser en deux atomes plus petits
        lorsqu'il était bombardé par des neutrons. Cette découverte a été une
        étape importante dans le développement de la technologie nucléaire et a
        conduit à la création de la bombe atomique.
      </p>
      <h4>... et explications</h4>
      {/* <div style={{ display: "flex" }}> */}
      <NoteBox
        title="Fission nucléaire expliquée"
        style={{
          fontSize: "1.15em",
          // maxWidth: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        La fission nucléaire a était mise en évidence pour la première fois en
        1938, lorsque les physiciens allemands Otto Hahn et Fritz Strassmann ont
        découvert que l'uranium pouvait se diviser en deux atomes plus petits
        lorsqu'il était bombardé par des neutrons. Cette découverte a été une
        étape importante dans le développement de la technologie nucléaire et a
        conduit à la création de la bombe atomique. Hahn et Strassmann
        travaillaient sur la radioactivité de l'uranium lorsqu'ils ont observé
        que l'uranium bombardé par des neutrons produisait des éléments plus
        légers, tels que le baryum et le krypton. Ils ont initialement supposé
        que ces éléments étaient produits par la capture d'un neutron par
        l'uranium, mais ils ont rapidement réalisé que quelque chose de plus
        complexe se produisait. Lise Meitner, une amie de Hahn qui avait fui
        l'Allemagne nazie, a proposé une explication de la fission nucléaire.
        Elle a suggéré que l'uranium pouvait se diviser en deux atomes plus
        petits, libérant une grande quantité d'énergie. L'explication de Meitner
        a été confirmée par d'autres physiciens, dont Otto Frisch, le neveu de
        Meitner. Frisch a également calculé que la fission nucléaire libérait
        une quantité d'énergie considérable.
      </NoteBox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* <ImageBox
          url="/PACE/Nuclear_fission.png"
          side="none"
          title="Schéma expliquant la fission nucléaire"
          src="Wikimedia (Public domain)"
          nofloat={true}
          style={{ width: "100%", margin: "0" }}
        /> */}
        <div className="imageboxwrapper">
          <span className="h5 imagetitle">
            Schéma expliquant la fission nucléaire
          </span>

          <img
            style={{ maxHeight: "700px" }}
            src="/PACE/Nuclear_fission.png"
            alt="Schéma expliquant la fission nucléaire"
            className="imageimg"
          />
          <p className={"imagesourcetext"}>
            <em>Crédit:&nbsp; Wikimedia (Public domain)</em>
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default DecouvXX;
