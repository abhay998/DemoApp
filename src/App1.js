// useMemo Example
import logo from "./logo.svg";
import "./App.css";
import Child from "./component/child";
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [todo, setTodo] = useState(["todo1", "todo2"]);

  console.log("todo todo", todo);

  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  console.log("calculation ", calculation);

  return (
    <div className="App">
      {/* <Child memoValue={memoValue} /> */}
      <button onClick={() => setNumber((number) => number + 1)}>
        <label>Increase number </label>
      </button>
      <button onClick={() => setTodo([...todo, `todo${todo?.length + 1}`])}>
        <label>Increase Todo </label>
      </button>
      {/* <input type="number" value={number} onChange={handleInputChange} /> */}
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log("hello ");
  for (let i = 0; i < 1000; i++) {
    num = num + i;
  }
  return num;
};
export default App;
