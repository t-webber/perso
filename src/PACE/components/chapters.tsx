import React from "react";

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
  <div className="chapter-container">
    {/* {intoc ? ( */}
    <h2 className="numbered">{title}</h2>
    {/* {React.createElement("h2", null, title)} */}
    {/* <h2>{title}</h2> */}
    {/* // ) : ( */}
    {/* <span className={`h${level}`}>{title}</span> */}
    {/* // )} */}
    {intro && <p>{intro}</p>}
    {sections.map((section, index) => (
      <div key={index}>{section}</div>
    ))}
  </div>
);

export default Chapter;
