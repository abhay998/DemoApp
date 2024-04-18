import React, { memo, useContext } from "react";
import { ParentContext } from "./App6";

const GrandChild = ({ todo }) => {
  console.log("todo ", todo);
  const user = useContext(ParentContext);
  console.log("GranChild", user);
  return (
    <div>
      {todo?.map((item) => (
        <label>{item}</label>
      ))}
    </div>
  );
};

export default memo(GrandChild);
