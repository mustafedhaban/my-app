import React, { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow text-center">
        <h1 id="counterValue" className="text-4xl mb-4 text-gray-800">
            {count}
        </h1>
        <div className="flex justify-center gap-4">
        <button
          id="counterButtonIncrease"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={increment}
        >
          Increment
        </button>
        <button
          id="counterButtonDecrease"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={decrement}
        >
          Decrement
        </button>
        
        </div>
      </div>
    </div>
  );
}