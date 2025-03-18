import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepDecrement = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleStepIncrement = () => {
    setStep((s) => s + 1);
  };

  const handleCountDecrement = () => {
    setCount((c) => c - step);
  };

  const handleCountIncrement = () => {
    setCount((c) => c + step);
  };

  return (
    <div className="w-3/4 mx-auto h-full flex justify-center gap-2 items-center flex-col">
      <div className="steps">
        <button
          className="bg-cyan-500 px-5 py-1 rounded-lg border-2 cursor-pointer"
          onClick={handleStepDecrement}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button
          className="bg-cyan-500 px-5 py-1 rounded-lg border-2 cursor-pointer"
          onClick={handleStepIncrement}
        >
          +
        </button>
      </div>
      <div className="count">
        <button
          className="bg-cyan-500 px-5 py-1 rounded-lg border-2 cursor-pointer"
          onClick={handleCountDecrement}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          className="bg-cyan-500 px-5 py-1 rounded-lg border-2 cursor-pointer"
          onClick={handleCountIncrement}
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
    </div>
  );
}

export default App;
