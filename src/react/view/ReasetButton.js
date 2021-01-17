import React from "react";

const Reset = ({ reset }) => {
  return (
    <>
      <button
        id="reset"
        type="button"
        className="button button_reset"
        onClick={reset}
      >
        reset
      </button>
    </>
  );
};

export default Reset;
