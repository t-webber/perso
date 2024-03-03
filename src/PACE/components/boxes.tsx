import React from "react";
import "./boxes.css";

// import { IconBase, IconType } from "react-icons";
// import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsExclamationCircle } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";

const realTitle = (title: string, defaultTitle: string) => {
  if (title === undefined) {
    return defaultTitle;
  } else {
    return title;
  }
};

const marginSpace = (side: "left" | "right" | "none") => {
  if (side === "left") {
    return { marginRight: "25px" };
  } else if (side === "right") {
    return { marginLeft: "25px" };
  } else {
    return {};
  }
};

interface FloatingTextBoxWrapperProps {
  children: React.ReactElement | string;
  borderColor: `#${string}`;
  backgroundColor: `#${string}`;
  side: "left" | "right" | "none";
  title: string;
  style?: React.CSSProperties;
  titlestyle?: React.CSSProperties;
  Icon: React.ReactElement;
}

const FloatingTextBoxWrapper: React.FC<FloatingTextBoxWrapperProps> = ({
  children,
  side,
  borderColor,
  backgroundColor,
  title,
  style,
  titlestyle,
  Icon,
}) => {
  return (
    <div className="box-floated" style={{ float: side }}>
      <div
        className="floatingtextbox"
        style={{
          border: `3px solid ${borderColor}`,
          backgroundColor: backgroundColor,
          ...style,
        }}
      >
        <span
          className="h4 title"
          style={{
            border: `3px solid ${borderColor}`,
            backgroundColor: backgroundColor,
            ...titlestyle,
          }}
        >
          {realTitle(title, "Fait étonnant")}
        </span>
        <span className="floatingicon">{Icon}</span>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

interface DefinitionBoxProps {
  side: "left" | "right" | "none";
  title: string;
  children: React.ReactElement | string;
  style?: React.CSSProperties;
}

const DefinitionBox: React.FC<DefinitionBoxProps> = ({
  side,
  title,
  children,
  style,
}) => {
  let borderColor: `#${string}` = "#c82040";
  let backgroundColor: `#${string}` = "#ffeeee";
  return (
    <FloatingTextBoxWrapper
      side={side}
      title={title}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      style={{
        ...marginSpace(side),
        ...style,
      }}
      Icon={
        <GoQuestion
          style={{
            color: borderColor,
            background: backgroundColor,
            borderRadius: "50px",
          }}
        />
      }
    >
      {children}
    </FloatingTextBoxWrapper>
  );
};

const FactBox = ({
  side,
  title,
  children,
  style,
}: {
  side: "left" | "right" | "none";
  title: string;
  children: React.ReactElement | string;
  style?: React.CSSProperties;
}) => {
  let borderColor: `#${string}` = "#3b47ce";
  let backgroundColor: `#${string}` = "#e3e8ff";
  return (
    <FloatingTextBoxWrapper
      side={side}
      title={title}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      style={{
        ...marginSpace(side),
        ...style,
      }}
      Icon={
        <BsExclamationCircle
          style={{
            color: borderColor,
            background: backgroundColor,
            borderRadius: "50px",
          }}
        />
      }
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
  children: React.ReactElement | string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="notebox" style={style}>
      <span className="title h4">{realTitle(title, "Note")}</span>
      <div className="children">{children}</div>
    </div>
  );
};

export { FactBox, DefinitionBox, ImageBox, NoteBox };
