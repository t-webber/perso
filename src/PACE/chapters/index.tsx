import React from "react";
import Chapter from "../components/chapters";

declare var require: NodeRequire & {
  context: (
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ) => any;
};

// const getComponents = (componentContext: {
//   keys: () => {
//     (): any;
//     new (): any;
//     map: {
//       (arg0: any): {
//         (): any;
//         new (): any;
//         flatMap: {
//           (
//             arg0: (
//               module:
//                 | {
//                     [s: string]: // import Medoc from "./chap1/medoc";
//                     unknown;
//                   }
//                 | ArrayLike<unknown>
//             ) => unknown[]
//           ): (() => any)[];
//           new (): any;
//         };
//       };
//       new (): any;
//     };
//   };
// }) => {
//   // const componentContext = require.context(folderPath, true, /\.tsx?$/);

//   return componentContext
//     .keys()
//     .map(componentContext)
//     .flatMap((module: { [s: string]: unknown } | ArrayLike<unknown>) =>
//       Object.values(module)
//     )
//     .map((func: () => any) => func());
// };

function getComponents(requireContext: {
  (arg0: React.Key | null | undefined): { (): any; new (): any; default: any };
  (arg0: React.Key | null | undefined): { (): any; new (): any; default: any };
  keys: any;
}) {
  var imported: string[] = [];
  var result: React.ReactNode[] = [];
  requireContext.keys().forEach((key: React.Key | null | undefined) => {
    const Component = requireContext(key).default;

    if (Component && !imported.includes(Component.name)) {
      imported.push(Component.name);
      result.push(<Component key={key} />);
    }
  });
  return result;
}

const components0: React.ReactNode[] = getComponents(
  require.context("./chap0", true, /\.tsx$/)
);
const components1: React.ReactNode[] = getComponents(
  require.context("./chap1", true, /\.tsx$/)
);
const components2: React.ReactNode[] = getComponents(
  require.context("./chap2", true, /\.tsx$/)
);
const components3: React.ReactNode[] = getComponents(
  require.context("./chap3", true, /\.tsx$/)
);

const Chapter0 = () => {
  return (
    <Chapter
      title="Histoire et découvertes scientifiques"
      sections={components0}
    />
  );
};
const Chapter1 = () => {
  return (
    <Chapter
      title="De la radiothérapie à la médecine nucléaire"
      sections={components1}
    />
  );
};

const Chapter2 = () => {
  // const components: React.ReactNode[] = getComponents(
  //   require.context("./chap2", true, /\.tsx$/)
  // );

  return (
    <>
      <div className="spacing"></div>
      <Chapter
        title="Les désastres nucléaires et leurs conséquences"
        sections={components2}
        intro="L'énergie nucléaire, malgré ses avantages, est souvent perçue comme trop
      dangereuse pour être utilisée sereinement, en raison des incidents
      passés. Cette perception de risque a profondément marqué les esprits.
        Les accidents nucléaires majeurs comme nous le verrons dans cette partie
        ont laissé des traces dans la mémoire collective et ont souligné la
        nécessité d'une gestion rigoureuse et prudente de cette technologie."
      />
    </>
  );
};

const Chapter3 = () => {
  return (
    <Chapter
      title="L'inscription du nucléaire dans une démarche respectueuse de l'environnement"
      sections={components3}
    />
  );
};

export { Chapter0, Chapter1, Chapter2, Chapter3 };
