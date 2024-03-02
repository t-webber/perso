import React from "react";

import "./boxes.css";

const realTitle = (title: string, defaultTitle: string) => {
  if (title === undefined) {
    return defaultTitle;
  } else {
    return title;
  }
};

const FloatingTextBoxWrapper = ({
  children,
  side,
  title,
  style,
  titlestyle,
}) => {
  return (
    <div className="box-floated" style={{ float: side }}>
      <div className="floatingtextbox" style={style}>
        <span className="h4 title" style={titlestyle}>
          {realTitle(title, "Fait étonnant")}
        </span>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

const DefinitionBox = ({ side, title, children }) => {
  return (
    <FloatingTextBoxWrapper
      side={side}
      title={title}
      style={{ border: "3px solid #c82040", background: "#f2f2f2" }}
      titlestyle={{ border: "3px solid #c82040", background: "#f2f2f2" }}
    >
      {children}
    </FloatingTextBoxWrapper>
  );
};

const FactBox = ({ side, title, children }) => {
  return (
    <FloatingTextBoxWrapper
      side={side}
      title={title}
      style={{ border: "2px solid blue", background: "#aac4f4" }}
      titlestyle={{ border: "2px solid blue", background: "#aac4f4" }}
    >
      {children}
    </FloatingTextBoxWrapper>
  );
};

const ImageBox = ({
  side,
  title,
  src,
  url,
  nofloat = false,
  style,
}: {
  side: "left" | "right" | "none";
  title: string;
  src: string;
  url: string;
  nofloat?: boolean;
  style?: React.CSSProperties;
}) => (
  <div
    style={{ float: nofloat ? "none" : side, ...style }}
    className="imageboxwrapper"
  >
    <span className="h5 imagetitle">{realTitle(title, "Fait étonnant")}</span>
    <img src={url} alt={title} className="imageimg" />
    <p className={"imagesourcetext imagesource" + side}>
      <em>
        Source:&nbsp;
        {src}
      </em>
    </p>
  </div>
);

const NoteBox = ({
  title,
  children,
  style,
}: {
  title: string;
  children: any;
  style?: any;
}) => {
  return (
    <div className="notebox" style={style}>
      <span className="title h4">{realTitle(title, "Note")}</span>
      <div className="children">{children}</div>
    </div>
  );
};

export { FactBox, DefinitionBox, ImageBox, NoteBox };
