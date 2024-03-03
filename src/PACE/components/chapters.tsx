import React from "react";

const PartContainer = ({
  sections,
  level,
  DefaultElt,
  title,
  intoc = true,
  intro,
}: {
  sections: React.ReactNode[];
  title: string;
  level: number;
  DefaultElt: string;
  intoc: boolean;
  intro?: string;
}) => {
  const TagName = DefaultElt;

  return (
    <div className="chapter-container">
      {intoc ? (
        React.createElement(TagName, null, title)
      ) : (
        <span className={`h${level}`}>{title}</span>
      )}
      {intro && <p>{intro}</p>}
      {sections.map((section, index) => (
        <div key={index}>{section}</div>
      ))}
    </div>
  );
};

const Chapter = ({
  sections,
  title,
  intoc = true,
  intro,
}: {
  sections: React.ReactNode[];
  title: string;
  intoc?: boolean;
  intro?: string;
}) => (
  <PartContainer
    sections={sections}
    title={title}
    level={2}
    DefaultElt="h2"
    intoc={intoc}
    intro={intro}
  />
);

export default Chapter;
