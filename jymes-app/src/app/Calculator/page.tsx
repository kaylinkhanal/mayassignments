"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const buttons = [
    ["AC", "❌", "sqrt", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["%", "0", ".", "="],
  ];

  const symbols = ["+", "-", "*", "/", "(", ")", ".", "%"];

  const handleCalculation = (value: string) => {
    if (value === "AC") {
      setResult("");
    } else if (value === "❌") {
      setResult(result.slice(0, -1));
    } else if (value === "=") {
      try {
        let expression = result;

        // Handle percentage format: X%Y = (X / 100) * Y
        const percentMatch = expression.match(/^(\d+(\.\d+)?)%(\d+(\.\d+)?)$/);
        if (percentMatch) {
          const percentage = parseFloat(percentMatch[1]);
          const ofValue = parseFloat(percentMatch[3]);
          const evaluated = (percentage / 100) * ofValue;
          setResult(String(evaluated));
          return;
        }

        // Fallback: Replace standalone % with /100 (e.g. "20%" becomes "20/100")
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        const evaluated = Function(`return (${expression})`)();
        setResult(String(evaluated));
      } catch {
        setResult("Error");
      }
    } else if (value === "sqrt") {
      try {
        const evaluated = Math.sqrt(Number(result));
        setResult(String(evaluated));
      } catch {
        setResult("Error");
      }
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <div className="mb-4">
          <input
            type="text"
            value={result}
            readOnly
            className="w-full p-4 text-right text-xl border rounded-md bg-gray-50"
          />
        </div>

        {buttons.map((row, i) => (
          <div key={i} className="flex justify-between mb-2">
            {row.map((btn, j) => (
              <button
                key={j}
                onClick={() => handleCalculation(btn)}
                className={`flex-1 m-1 py-3 rounded-lg text-lg font-semibold transition-colors ${
                  btn === "="
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : btn === "AC"
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : btn === "❌"
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : btn === "sqrt"
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : symbols.includes(btn)
                    ? "bg-blue-400 hover:bg-blue-500 text-white"
                    : "bg-gray-800 hover:bg-gray-900 text-white"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
