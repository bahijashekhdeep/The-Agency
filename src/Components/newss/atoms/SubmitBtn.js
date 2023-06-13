import React from "react";

const SubmitBtn = (props) => {
  const { text } = props;
  return (
    <>
      <div className="submitBtn">
        <input type="submit" value={text} />
      </div>
    </>
  );
};

export default SubmitBtn;
