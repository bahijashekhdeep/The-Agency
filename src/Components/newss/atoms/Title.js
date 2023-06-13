import React from "react";

export default function Title({ text, type: titleType }) {
  return (
    <>
      <div className={titleType}>
        <p>{text}</p>
      </div>
    </>
  );
}
