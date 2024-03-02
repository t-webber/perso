import React from "react";

const TOC = () => {
  function loadTOC() {
    var toc = "";
    var level = 0;

    const container = document.getElementById("container");

    if (container === null) {
      return;
    }

    container.innerHTML = container.innerHTML.replace(
      /<h([\d])>([^<]+)<\/h([\d])>/gi,
      function (str, openLevel, titleText, closeLevel) {
        if (openLevel !== closeLevel) {
          return str;
        }

        if (openLevel > level) {
          toc += new Array(openLevel - level + 1).join(`<ul>`);
        } else if (openLevel < level) {
          toc += new Array(level - openLevel + 1).join(`</ul>`);
        }

        level = parseInt(openLevel);

        var anchor = titleText.replace(/ /g, "_");
        toc += '<li><a href="#' + anchor + '">' + titleText + "</a></li>";

        return (
          "<h" +
          openLevel +
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
    }

    const tocdiv = document.getElementById("toc");
    if (tocdiv) {
      tocdiv.innerHTML += toc;
    }
  }

  window.onfocus = loadTOC;
  window.onload = loadTOC;

  return (
    <div id="toc">
      <span className="h2">Table des matières</span>
    </div>
  );
};

export default TOC;
