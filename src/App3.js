// useMamo 2 Example
import logo from "./logo.svg";
import "./App.css";
import Child from "./component/child";
import { useCallback, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [testingNumber, setTestingNumber] = useState(0);

  const [todo, setTodo] = useState(["todo1", "todo2"]);
  console.log("todo todo", todo);
  const calculationOfMemo = () => {
    console.log("hello abhay");
    return testingNumber * 2;
  };

  const useMemoValue = useMemo(
    () => calculationOfMemo(testingNumber),
    [testingNumber]
  );

  return (
    <div className="App">
      {/* <Child memoValue={testingNumber} testingClick={testingClick} /> */}
      <button onClick={() => setNumber((number) => number + 1)}>
        <label>Increase number </label>
      </button>
      <button onClick={() => setTodo([...todo, `todo${todo?.length + 1}`])}>
        <label>Increase Todo </label>
      </button>

      <input type="number" onChange={(e) => setTestingNumber(e.target.value)} />
    </div>
  );
}
export default App;
