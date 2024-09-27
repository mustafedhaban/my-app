import React, { useState } from "react";

export default function Index() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow text-center">
        <h1 id="counterValue" className="text-4xl mb-4">
          {counter}
        </h1>
        <button
          id="counterButtonIncrease"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button
          id="counterButtonDecrease"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDecrease}
        >
          Reduce
        </button>
      </div>
    </div>
  );
}