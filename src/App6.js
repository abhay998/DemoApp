import React, { useState } from "react";
import { createContext } from "react";
import GrandSon from "./component/GrandSon";
export const ParentContext = createContext();
function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <ParentContext.Provider value={user}>
        <div>
          <button>
            <label>liuyghfcgyi</label>
          </button>
          <GrandSon />
        </div>
      </ParentContext.Provider>
    </>
  );
}

export default App;
