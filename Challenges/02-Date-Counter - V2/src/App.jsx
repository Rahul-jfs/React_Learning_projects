import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleRange = (e) => {
    setStep(Number(e.target.value));
  };

  const handleCount = (e) => {
    setCount(Number(e.target.value));
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="w-3/4 mx-auto h-full flex justify-center gap-2 items-center flex-col">
      <div className="steps">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleRange(e)}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        <button
          className="bg-cyan-500 px-5 py-1 rounded-lg border-2 cursor-pointer"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          type="text"
          className="border-2 m-2 rounded p-1"
          value={count}
          onChange={(e) => handleCount(e)}
        />
        {/* <span>Count: {count}</span> */}
        <button
          className="bg-cyan-500 px-5 py-1 rounded-lg border-2 cursor-pointer"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      <div className="display">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${-count} day ago was `}
        </span>{" "}
        {date.toDateString()}
      </div>
      {(step !== 1 || count !== 0) && (
        <button
          className="bg-black text-white px-5 py-1 rounded-lg"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
