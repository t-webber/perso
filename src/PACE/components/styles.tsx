import React from "react";

const Sc = ({ s }) => {
  return (
    <>
      <span style={{ fontVariant: "small-caps" }}>{s}</span>
      <sup>e</sup>
    </>
  );
};

export default Sc;
