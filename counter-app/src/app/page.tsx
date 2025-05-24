"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Page component (required for Next.js App Router)
export default function HomePage() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
    else console.log("Maximum value reached");
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
    else console.log("Minimum value reached");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-100 to-amber-200">
      <section className="bg-white w-80 p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Jymes Counter</h1>

        <motion.div
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          // transition={{ type: "spring", stiffness: 100 }}
          // transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          transition={{ type: "inertia", velocity: 1, bounceStiffness: 400 }}
          className="text-5xl font-bold text-amber-500 mb-8"
        >
          {count}
        </motion.div>

        <div className="flex justify-center gap-5">
          <button
            onClick={decrement}
            disabled={count <= 0}
            className={`w-12 h-12 text-2xl font-bold rounded-full transition duration-200 ${
              count <= 0
                ? "bg-gray-300 text-white cursor-not-allowed"
                : "bg-red-400 hover:bg-red-500 text-white"
            }`}
          >
            –
          </button>
          <button
            onClick={increment}
            disabled={count >= 10}
            className={`w-12 h-12 text-2xl font-bold rounded-full transition duration-200 ${
              count >= 10
                ? "bg-gray-300 text-white cursor-not-allowed"
                : "bg-green-400 hover:bg-green-500 text-white"
            }`}
          >
            +
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Min: 0 &nbsp; | &nbsp; Max: 10
        </p>
      </section>
    </main>
  );
}
