import React, { useCallback, useMemo } from "react";
import GrandSon from "./component/GrandSon";

export default function App() {
  let a = 15;
  let b = 10;

  function Sum(x, y) {
    return x + y; //25
  }
  let callBack = useCallback(() => {
    console.log("hello useCallBack");
    Sum(a, b);
  }, [a, b]);

  let memoValue = useMemo(() => {
    console.log("hello useMemo");
    Sum(a, b);
  }, [a, b]);
  return (
    <div>
      <h1>hkkkk</h1>
      <GrandSon callBack={callBack} />
    </div>
  );
}
