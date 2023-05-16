import { useReducer } from 'react';
import './App.css'

function App() {

  const [count, updateCount] = useReducer(countReducer, 0);

  function countReducer(state, action) {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "double") {
      return state * 2;
    } else if (action === "puissance") {
      return state * state;
    } else if (action === "divide") {
      return state / 2;
    } else if (action === "reset") {
      return state = 0;
    } else if (action === "random") {
      return state = Math.floor(Math.random() * 900);
    }
  }
  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() =>
          updateCount("increment")}>+ 1</button>
        <button onClick={() =>
          updateCount("decrement")}>- 1</button>
        <button onClick={() =>
          updateCount("double")}>x 2</button>
        <button onClick={() =>
          updateCount("puissance")}>count x count</button>
        <button onClick={() =>
          updateCount("divide")}>/ 2</button>
        <button onClick={() =>
          updateCount("random")}>Random?</button>
        <button onClick={() =>
          updateCount("reset")}>Reset</button>
      </div>

    </div>
  )
}

export default App
