import "./boxes.css";

const realTitle = (title, defaultTitle) => {
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

const ImageBox = ({ side, title, src, url }) => {
  return (
    <div style={{ float: side }} className="imageboxwrapper">
      <span className="h5 imagetitle">{realTitle(title, "Fait étonnant")}</span>
      <img src={url} alt={title} className="imageimg" />
      <p
        style={{ padding: "10px", maxWidth: "100%" }}
        className={"imagesourcetext imagesource" + side}
      >
        <em>
          Source:&nbsp;
          {src}
        </em>
      </p>
    </div>
  );
};

const NoteBox = ({ side, title, children }) => {
  return (
    <div className="notebox">
      <span className="title h4">{realTitle(title, "Note")}</span>
      <div className="children">{children}</div>
    </div>
  );
};

export { FactBox, DefinitionBox, ImageBox, NoteBox };
