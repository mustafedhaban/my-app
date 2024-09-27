import React, { useState } from "react";

export default function Index() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow text-center">
        <h1 id="counterValue" className="text-4xl mb-4 text-gray-800">
          {counter}
        </h1>
        <div className="flex justify-center gap-4">
        <button
          id="counterButtonIncrease"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          id="counterButtonDecrease"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          id="counterButtonReset"
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}