'use client'
import React, { useState } from "react";

export default function MathGame() {
  const [gameState, setGameState] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
    userAnswer: "",
    score: 0,
    feedback: ""
  });

  const handleChange = (e) => {
    setGameState({ ...gameState, userAnswer: e.target.value });
  };

  const checkAnswer = () => {
    const correct = gameState.num1 + gameState.num2;
    if (parseInt(gameState.userAnswer) === correct) {
      setGameState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        userAnswer: "",
        score: gameState.score + 1,
        feedback: "✅ Correct!"
      });
    } else {
      setGameState({
        ...gameState,
        feedback: "❌ Try again!"
      });
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h2>🧮 Simple Math Game</h2>
      <p>Solve: {gameState.num1} + {gameState.num2}</p>
      <input
        type="number"
        value={gameState.userAnswer}
        onChange={handleChange}
      />
      <br /><br />
      <button onClick={checkAnswer}>Check</button>
      <p>{gameState.feedback}</p>
      <h3>Score: {gameState.score}</h3>
    </div>
  );
}
