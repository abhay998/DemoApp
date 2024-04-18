import React, { useContext } from "react";
import { ParentContext } from "../App6";
import GrandChild from "../GrandChild";

export default function GrandSon({ callBack }) {
  const user = useContext(ParentContext);
  console.log("user", user);
  return (
    <div>
      <button onClick={callBack} />
      <GrandChild />
    </div>
  );
}
