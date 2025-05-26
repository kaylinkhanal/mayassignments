'use client'
import React, { useEffect, useState } from 'react'

const initialGrid = () => ([
  [
    { item: '1', displayed: false }, { item: '💣', displayed: false }, { item: '2', displayed: false },
    { item: '1', displayed: false }, { item: '1', displayed: false }, { item: '', displayed: false },
    { item: '1', displayed: false }, { item: '💣', displayed: false }, { item: '2', displayed: false },
    { item: '1', displayed: false }
  ],
  [
    { item: '1', displayed: false }, { item: '1', displayed: false }, { item: '2', displayed: false },
    { item: '💣', displayed: false }, { item: '2', displayed: false }, { item: '1', displayed: false },
    { item: '2', displayed: false }, { item: '2', displayed: false }, { item: '💣', displayed: false },
    { item: '1', displayed: false }
  ],
  [
    { item: '💣', displayed: false }, { item: '2', displayed: false }, { item: '3', displayed: false },
    { item: '2', displayed: false }, { item: '💣', displayed: false }, { item: '1', displayed: false },
    { item: '1', displayed: false }, { item: '💣', displayed: false }, { item: '2', displayed: false },
    { item: '1', displayed: false }
  ],
  [
    { item: '1', displayed: false }, { item: '2', displayed: false }, { item: '💣', displayed: false },
    { item: '2', displayed: false }, { item: '1', displayed: false }, { item: '', displayed: false },
    { item: '1', displayed: false }, { item: '1', displayed: false }, { item: '1', displayed: false },
    { item: '', displayed: false }
  ],
  [
    { item: '0', displayed: false }, { item: '1', displayed: false }, { item: '1', displayed: false },
    { item: '1', displayed: false }, { item: '', displayed: false }, { item: '', displayed: false },
    { item: '', displayed: false }, { item: '', displayed: false }, { item: '', displayed: false },
    { item: '', displayed: false }
  ],
  Array(10).fill({ item: '', displayed: false }),
  Array(10).fill({ item: '', displayed: false }),
  Array(10).fill({ item: '', displayed: false }),
]);

const Mine = () => {
  const [mineGrid, setMineGrid] = useState(initialGrid);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval;
    if (hasStarted && timer > 0 && !gameOver) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [hasStarted, timer, gameOver]);

  const handleMineClick = (row, col) => {
    if (gameOver) return;

    if (!hasStarted) {
      setHasStarted(true);
    }

    const newGrid = [...mineGrid];
    newGrid[row][col].displayed = true;

    if (newGrid[row][col].item !== '💣' && newGrid[row][col].item !== '') {
      setScore(score + Number(newGrid[row][col].item));
    } else if (newGrid[row][col].item === '💣') {
      setGameOver(true);
    }

    setMineGrid(newGrid);
  };

  const resetGame = () => {
    setMineGrid(initialGrid);
    setTimer(60);
    setScore(0);
    setGameOver(false);
    setHasStarted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-gray-800 px-4 py-6 font-[Inter]">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-6 max-w-5xl w-full text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          💣 Minesweeper Challenge
        </h1>

        <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-base font-semibold mb-6 px-2">
          <p className="text-cyan-300">⏳ Time Left: <span>{timer}s</span></p>
          <p className="text-green-300">💯 Score: <span>{score}</span></p>
        </div>

        {gameOver && (
          <p className="text-red-400 font-bold text-lg mb-4 animate-pulse">💥 Boom! You hit a mine!</p>
        )}

        <div className="space-y-2 mb-6 grid grid-cols-1 sm:grid-cols-1">
          {mineGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1 sm:gap-2">
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  onClick={() => handleMineClick(rowIndex, colIndex)}
                  className={`h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-md sm:rounded-lg text-sm sm:text-base transition-all
                  duration-150 font-semibold shadow-md hover:scale-105 active:scale-95
                  ${cell.displayed
                      ? 'bg-yellow-300 text-black'
                      : 'bg-white/20 hover:bg-white/30'}
                  `}
                >
                  {cell.displayed ? cell.item : ''}
                </button>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="mt-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold shadow-lg transition hover:scale-105 active:scale-95"
        >
          🔁 Retry
        </button>
      </div>
    </div>
  );
};

export default Mine;
