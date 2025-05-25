"use client";
import { useState } from "react";

const buttons = [
  ["C", "/", "*", "DEL"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "="],
  ["0", "."],
];

export default function Home() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        // Use eval carefully, consider mathjs for production
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl shadow-xl p-4 bg-white">
        <div className="mb-4 text-right text-2xl bg-gray-50 p-4 rounded shadow-inner min-h-[64px]">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.flat().map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className={`p-6 text-lg rounded-xl shadow hover:bg-gray-200 transition ${
                btn === "="
                  ? "bg-blue-500 text-white"
                  : btn === "C" || btn === "DEL"
                  ? "bg-red-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
