import React from "react";

const Sc = ({ str }: { str: string }) => {
  return (
    <>
      <span style={{ fontVariant: "small-caps" }}>{str}</span>
      <sup>e</sup>
    </>
  );
};

export default Sc;
