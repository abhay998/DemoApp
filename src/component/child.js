import React, { memo } from "react";

const Child = ({ memoValue, testingClick }) => {
  console.log("memoValue", memoValue);
  return (
    <div>
      <button onClick={testingClick}>
        <label>Testing </label>
      </button>
    </div>
  );
};

export default memo(Child);
