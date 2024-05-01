import React from "react";

import "./biblio.css";

const Link = ({ url }: { url: string }) => {
  return (
    <a href={url}>
      {" "}
      <span style={{ fontFamily: "monospace", fontWeight: "500" }}>{url}</span>
    </a>
  );
};

const Bibliography = () => {
  return (
    <div className="chapter-container">
      <h2>Bibliographie</h2>
      <ul className="biblio">
        <li>
          <span className="bib-bold">
            {" "}
            Commissariat à l'énergie atomique (CEA).
          </span>{" "}
          <em>De la recherche à l'industrie.</em>{" "}
          <Link url="https://www.cea.fr/Pages/domaines-recherche/energies.aspx" />
          .
        </li>
        <li>
          <span className="bib-bold">
            {" "}
            Agence internationale de l'énergie atomique (IAEA).
          </span>{" "}
          <em>L'atome pour la paix et le développement.</em>{" "}
          <Link url="https://www.iaea.org/" />.
        </li>
        <li>
          <span className="bib-bold">
            {" "}
            Institut de radioprotection et de sûreté nucléaire (IRSN).
          </span>{" "}
          <Link url="https://www.irsn.fr/savoir-comprendre/surete/parc-reacteurs-nucleaires-francais" />
          .
        </li>
        <li>
          <span className="bib-bold">
            {" "}
            Société française d'énergie nucléaire (SFEN).
          </span>{" "}
          <em>
            Permettre aux esprits curieux de partager de nouvelles idées sur
            l'énergie nucléaire.
          </em>{" "}
          <Link url="https://www.sfen.org/" />. Déc. 2023.
        </li>
        <li>
          <span className="bib-bold"> Henri Becquerel.</span>{" "}
          <em>
            Table générale des comptes rendus des séances de l'Académie des
            sciences.
          </em>{" "}
          Sur les radiations invisibles émises par les corps phosphorescents,
          volumes 122-151, pages 420-421, 501-503.
          <Link url="https://gallica.bnf.fr/ark:/12148/bpt6k30780/" />. Jan.
          1896.
        </li>
        <li>
          <span className="bib-bold"> Électricité de France.</span>{" "}
          <em>La Centrale Nucléaire du Tricastin.</em>{" "}
          <Link url="https://www.edf.fr/centrale-nucleaire-tricastin" />.
        </li>
        <li>
          <span className="bib-bold">
            Représentation Permanente de la France auprès de l'Union européenne
            (RPUE).
          </span>{" "}
          Le nucléaire aujourd'hui en Europe et en France.
          <Link url="https://ue.delegfrance.org/le-nucleaire-aujourd-hui-en-europe" />
          .
        </li>
        <li>
          <span className="bib-bold"> GreenPeace.</span> De la recherche à
          l'industrie.
          <Link
            url="https://www.greenpeace.
        fr/nucleaire-solution-climat/"
          />
          .
        </li>
        <li>
          <span className="bib-bold"> Iter.</span> Une énergie pour notre
          avenir.
          <Link url="https://www.iter.org/fr/" />. Nov. 2006.
        </li>
        <li>
          <span className="bib-bold"> Ministère de l'Économie.</span> France
          2030 : Un plan ambitieux sur le nucléaire de demain.
          <Link url="https://www.economie.gouv.fr/france-2030-plan-ambitieux-nucleaire-demai" />
          n. Juin 2023.
        </li>
        <li>
          <span className="bib-bold"> Musée Marie Curie.</span> 5e, Paris,
          France.
          <Link url="https://musee.curie.fr/" />.
        </li>
        <li>
          <span className="bib-bold"> Marjane Satrapi.</span>{" "}
          <em>Radioactive.</em> (Film). 2019.
        </li>
        <li>
          <span className="bib-bold"> Christopher Nolan.</span>{" "}
          <em>Oppenheimer.</em> (Film). 2023.
        </li>
        <li>
          <span className="bib-bold"> Futura Science.</span>{" "}
          <em>L'énergie nucléaire au cours de l'Histoire.</em>{" "}
          <Link url="https://www.futura-sciences.com/sciences/dossiers/physique-energie-nucleaire-a-z-126/page/2/" />
          .
        </li>
        <li>
          <span className="bib-bold">Institut of physics.</span>{" "}
          <em>Curie's X-ray ambulances.</em>{" "}
          <Link url="https://spark.iop.org/curies-x-ray-ambulances" />
        </li>
        <li>
          <span className="bib-bold">Futura Science.</span>{" "}
          <em>Personalités.</em> Henri Becquerel.
          <Link url="https://www.futura-sciences.com/sciences/personnalites/sciences-henri-becquerel-1374/" />
        </li>
        <li>
          <span className="bib-bold">Futura Science.</span>{" "}
          <em>Personalités.</em> Marie Curie.
          <Link url="https://www.futura-sciences.com/sciences/personnalites/sciences-marie-curie-222/" />
        </li>
        <li>
          <span className="bib-bold">Gouvernement français.</span>{" "}
          <em>Centrales de production nucélaire d'EDF SA.</em>{" "}
          <Link url="https://www.data.gouv.fr/fr/datasets/centrales-de-production-nucleaire-dedf-sa/" />
        </li>
        <li>
          <span className="bib-bold">Gouvernement français.</span>{" "}
          <em>
            Installation production électrique éolienne par commune en 2021.
          </em>{" "}
          <Link url="https://www.data.gouv.fr/en/datasets/installation-production-electrique-eolienne-par-commune-en-2021/" />
        </li>
      </ul>
    </div>
  );
};

// Wikimedia
// Creative Commons Attribution-Share Alike 4.0
//  Marianne Casamance

export default Bibliography;
