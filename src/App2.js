// useCallBack Example
import logo from "./logo.svg";
import "./App.css";
import Child from "./component/child";
import { useCallback, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [testingNumber, setTestingNumber] = useState(0);

  const [todo, setTodo] = useState(["todo1", "todo2"]);
  console.log("todo todo", todo);

  const testingClick = useCallback(() => {
    setTestingNumber((number) => number + 1);
  }, [testingNumber]);
  return (
    <div className="App">
      <Child memoValue={testingNumber} testingClick={testingClick} />
      <button onClick={() => setNumber((number) => number + 1)}>
        <label>Increase number </label>
      </button>
      <button onClick={() => setTodo([...todo, `todo${todo?.length + 1}`])}>
        <label>Increase Todo </label>
      </button>
    </div>
  );
}
export default App;
