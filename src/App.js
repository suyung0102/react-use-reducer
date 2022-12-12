import { useState, useReducer } from "react";
import "./App.css";

function App() {
  // useState 사용법
  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({ type: "DOWN", number });
  }
  function reset() {
    countDispatch({ type: "RESET", number });
  }
  function up() {
    countDispatch({ type: "UP", number });
  }
  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );

  // useReducer 사용법
  // function countReducer(oldCount, action) {
  //   if (action == "UP") {
  //     return oldCount + 1;
  //   } else if (action == "DOWN") {
  //     return oldCount - 1;
  //   } else if (action == "RESET") {
  //     return 0;
  //   }
  // }
  // const [count, countDispatch] = useReducer(countReducer, 0);
  // function down() {
  //   countDispatch("DOWN");
  // }
  // function reset() {
  //   countDispatch("RESET");
  // }
  // function up() {
  //   countDispatch("UP");
  // }
  // return (
  //   <div>
  //     <input type="button" value="-" onClick={down} />
  //     <input type="button" value="0" onClick={reset} />
  //     <input type="button" value="+" onClick={up} />
  //     <span>{count}</span>
  //   </div>
  // );
}

export default App;
