import React from "react";
import Chapter from "../components/chapters";

declare var require: NodeRequire & {
  context: (
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ) => any;
};

const getComponents = (componentContext: {
  keys: () => {
    (): any;
    new (): any;
    map: {
      (arg0: any): {
        (): any;
        new (): any;
        flatMap: {
          (
            arg0: (
              module:
                | {
                    [s: string]: // import Medoc from "./chap1/medoc";
                    unknown;
                  }
                | ArrayLike<unknown>
            ) => unknown[]
          ): (() => any)[];
          new (): any;
        };
      };
      new (): any;
    };
  };
}) => {
  // const componentContext = require.context(folderPath, true, /\.tsx?$/);

  return componentContext
    .keys()
    .map(componentContext)
    .flatMap((module: { [s: string]: unknown } | ArrayLike<unknown>) =>
      Object.values(module)
    )
    .map((func: () => any) => func());
};

const Chapter1 = () => {
  const components: React.ReactNode[] = getComponents(
    require.context("./chap1", true, /\.tsx?$/)
  );

  return (
    <Chapter
      title="Découverte d'une source d'énergie prometteuse"
      sections={components}
    />
  );
};

const Chapter2 = () => {
  const components: React.ReactNode[] = getComponents(
    require.context("./chap2", true, /\.tsx?$/)
  );

  return (
    <Chapter
      title="Les désastres nucléaire"
      sections={components}
      intro="L'énergie nucléaire, malgré ses avantages, est souvent perçue comme trop
        dangereuse pour être utilisée sereinement, en raison des incidents
        passés. Cette perception de risque a profondément marqué les esprits.
        Les accidents nucléaires majeurs comme nous le verrons dans cette partie
        ont laissé des traces dans la mémoire collective et ont souligné la
        nécessité d'une gestion rigoureuse et prudente de cette technologie."
    />
  );
};

const Chapter3 = () => {
  const components: React.ReactNode[] = getComponents(
    require.context("./chap3", true, /\.tsx?$/)
  );

  return (
    <Chapter
      title="L'inscription du nucléaire dans une démarche respectueuse de l'environnement"
      sections={components}
    />
  );
};

export { Chapter1, Chapter2, Chapter3 };
