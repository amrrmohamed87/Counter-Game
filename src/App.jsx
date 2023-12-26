import { useReducer } from "react";
export function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  }
  return state;
}

function App() {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  function handleIncrement(count) {
    counterDispatch({
      type: "INCREMENT",
      payload: count,
    });
  }
  function handleDecrement(count) {
    counterDispatch({
      type: "DECREMENT",
      payload: count,
    });
  }
  function handleRest(count) {
    counterDispatch({
      type: "RESET",
      payload: count,
    });
  }
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleRest}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
