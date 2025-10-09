import { useCounter } from "../hooks/use-counter";

export default function MyCounterApp() {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter();

  return (
    <div>
      <h1>My Counter App</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleSubtract}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
