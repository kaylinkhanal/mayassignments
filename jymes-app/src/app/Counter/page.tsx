"use client";
import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const Inc = () => {
    if (num < 10) {
      setNum(num + 1);
    } else {
      console.log("Can't increase");
    }
  };

  const Dec = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      console.log("Can't decrease");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Counter: {num}</h1>
      <div>
        <button
          onClick={Inc}
          className={`px-6 py-3 mx-2 rounded-lg ${
            num >= 10
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-400 text-black"
          }`}
        >
          +
        </button>
        <button
          onClick={Dec}
          className={`px-6 py-3 mx-2 rounded-lg ${
            num <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-400 text-black"
          }`}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
