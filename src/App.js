// Memo example
import React, { useState } from "react";
import GrandChild from "./GrandChild";

const App = () => {
  const [testingNumber, setTestingNumber] = useState(0);

  const [todo, setTodo] = useState(["todo1", "todo2"]);
  return (
    <div>
      <GrandChild todo={todo} />
      <button onClick={() => setTestingNumber((number) => number + 1)}>
        <label>Increase number </label>
      </button>

      <button onClick={() => setTodo([...todo, `todo${todo?.length + 1}`])}>
        <label>Increase Todo </label>
      </button>
    </div>
  );
};

export default App;
