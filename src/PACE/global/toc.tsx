const PAGES: { [key: string]: string } = {
  "Avant-Propos": "p2",
  "Utopie ou dystopie ?": "p2",
  "Histoire et découvertes scientifiques": "&nbsp;&nbsp;&nbsp;p3",
  "De la radiothérapie à la médecine nucléaire": "&nbsp;&nbsp;&nbsp;p6",
  "Les désastres nucléaires et leurs conséquences": "&nbsp;&nbsp;&nbsp;p7",
  "L'inscription du nucléaire dans une démarche respectueuse de l'environnement":
    "&nbsp;&nbsp;&nbsp;p8",
  "Vers un avenir énergétique durable ?": "p10",
  Bibliographie: "p11",
};

function pages(title: string) {
  if (title in PAGES) {
    return PAGES[title];
  }
  return "&nbsp;";
}

export default function TableOfContents() {
  function loadTOC() {
    var toc = "";
    var tocPages = "";
    var level = 0;

    const container = document.getElementById("container");

    if (container === null) {
      return;
    }

    container.innerHTML = container.innerHTML.replace(
      /<h([\d])([\s\S]*?)>([^<]+)<\/h([\d])>/gi,
      function (str, openLevel, classes, titleText: string, closeLevel) {
        if (openLevel !== 2) {
          console.log(
            "str(",
            str,
            ")openLevel(",
            openLevel,
            ")classes(",
            classes.trim(),
            ")titleText(",
            titleText,
            ")closeLevel(",
            closeLevel,
            ")"
          );
        }
        if (openLevel !== closeLevel) {
          return str;
        }

        if (openLevel > level) {
          toc += new Array(openLevel - level + 1).join(`<ul>`);
          tocPages += new Array(openLevel - level + 1).join(`<ul>`);
        } else if (openLevel < level) {
          toc += new Array(level - openLevel + 1).join(`</ul>`);
          tocPages += new Array(level - openLevel + 1).join(`</ul>`);
        }

        level = parseInt(openLevel);

        var anchor = titleText.replace(/ /g, "_");

        const opening =
          openLevel >= 3 || classes.trim() === 'class="numbered"'
            ? "<li>"
            : "<p>";

        toc += opening + '<a href="#' + anchor + '">' + titleText + "</a></li>";
        tocPages +=
          opening +
          '<a href="#' +
          anchor +
          '">' +
          pages(titleText) +
          "</a></li>";

        return (
          "<h" +
          openLevel +
          classes +
          '><a name="' +
          anchor +
          '">' +
          titleText +
          "</a></h" +
          closeLevel +
          ">"
        );
      }
    );

    if (level) {
      toc += new Array(level + 1).join("</ul>");
      tocPages += new Array(level + 1).join("</ul>");
    }

    const tocdiv = document.getElementById("toc");
    if (tocdiv) {
      tocdiv.innerHTML += toc;
    }
    const tocPagesdiv = document.getElementById("toc-pages");
    if (tocPagesdiv) {
      tocPagesdiv.innerHTML += tocPages;
    }
  }

  window.onfocus = loadTOC;
  window.onload = loadTOC;

  return (
    <>
      <span className="h2">Sommaire</span>
      <div className="toc-wrapper">
        <div id="toc"></div>
        <div id="toc-pages"></div>
      </div>
    </>
  );
}

// export default function TOC() {
//   return (
//     <div id="toc">
//       <span className="h2">Sommaire</span>
//     </div>
//   );
// }
