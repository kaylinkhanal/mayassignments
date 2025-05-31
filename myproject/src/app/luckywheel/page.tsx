'use client'
import React, { useEffect, useState } from 'react'

const AdvanceLottery = () => {
  const [lifeCount, setLifeCount] = useState(3);
  const [randomId, setRandomId] = useState([2,2,2])
  const [gameMsg, setGameMsg] = useState("Welcome to the Lottery Game! You have 3 lives. Match all three items to win a prize!");
  
  const items = [
    { icon: <span role="img" aria-label="cherry">🍒</span>, displayed: false, name: "Cherry" },
    { icon: <span role="img" aria-label="apple">🍎</span> , displayed: false, name: "Apple" },
    { icon: "7", displayed: false, name: "Seven" }
  ]

  useEffect(()=>{
    if(lifeCount === 0){
      setGameMsg("Game Over! Please refresh to play again.")
    }
  },[lifeCount])

  const generateRandomIds = ()=>{
    if (lifeCount === 0) return;

    const firstDraw= Math.floor(Math.random() * 3)
    const secondDraw= Math.floor(Math.random() * 3)
    const thirdDraw= Math.floor(Math.random() * 3)
    console.log(firstDraw, secondDraw, thirdDraw)

    if(firstDraw === secondDraw && secondDraw === thirdDraw){
        if(firstDraw === 2){
           setGameMsg("You won the jackpot!")
         }else {
            setGameMsg("You won a prize!")
          }
    }else {
      if(lifeCount > 0) {
        setLifeCount( lifeCount - 1)
      }
    }
    setRandomId([firstDraw, secondDraw, thirdDraw])
  }

  const handleRefresh = () => {
    setLifeCount(3);
    setRandomId([2,2,2]);
    setGameMsg("Welcome to the Lottery Game! You have 3 lives. Match all three items to win a prize!");
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-4 font-inter overflow-hidden'>
      <p className='text-xl md:text-2xl font-semibold mb-6 text-center px-4'>
        {gameMsg}
      </p>

      <div className='flex gap-2 mb-8'>
        { lifeCount >= 1 && <span role="img" aria-label="heart" className='text-red-500 text-3xl animate-pulse'>❤️</span> }
        { lifeCount >= 2 && <span role="img" aria-label="heart" className='text-red-500 text-3xl animate-pulse'>❤️</span> }
        { lifeCount >= 3 && <span role="img" aria-label="heart" className='text-red-500 text-3xl animate-pulse'>❤️</span> }
      </div>

      <div className='
        relative flex flex-col items-center
        bg-gray-800 border-8 border-gray-700 rounded-3xl
        shadow-2xl shadow-gray-700/50
        p-4 md:p-6
        w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
        min-h-[600px] md:min-h-[750px]
      '>
        <div className='
          w-full h-32 md:h-40
          bg-gradient-to-br from-blue-900 to-indigo-900
          border-4 border-blue-500 rounded-lg
          shadow-lg shadow-blue-700/50
          flex items-center justify-center mb-6
          relative overflow-hidden
          before:content-[""] before:absolute before:inset-0
          before:bg-gradient-to-b before:from-blue-400/20 before:to-transparent
          before:rounded-lg before:pointer-events-none
        '>
          <h2 className='text-5xl md:text-6xl font-black text-white uppercase tracking-widest text-center'
              style={{textShadow: '0 0 15px rgba(60, 150, 255, 0.8), 0 0 25px rgba(60, 150, 255, 0.6)'}}>
            MANEY'S SLOT MACHINE
          </h2>
        </div>

        <div className='
          w-full bg-gradient-to-br from-purple-900 to-black
          border-4 border-yellow-500 rounded-lg p-3 mb-6
          shadow-xl shadow-yellow-700/70
          flex flex-col items-center gap-2
          relative overflow-hidden
          before:content-[""] before:absolute before:inset-0
          before:bg-gradient-to-t before:from-transparent before:to-yellow-400/10
          before:rounded-lg before:pointer-events-none
        '>
          <div className='text-3xl md:text-4xl font-bold text-yellow-300 animate-pulse'
               style={{textShadow: '0 0 15px rgba(255,255,0,0.8), 0 0 25px rgba(255,255,0,0.6)'}}>
            GRAND JACKPOT
          </div>
          <div className='text-5xl md:text-6xl font-black text-green-400'
               style={{textShadow: '0 0 15px rgba(0,255,0,0.8), 0 0 25px rgba(0,255,0,0.6)'}}>
            $500,000.00
          </div>
          <div className='text-2xl md:text-3xl font-bold text-red-400'
               style={{textShadow: '0 0 10px rgba(255,0,0,0.6)'}}>
            $5,000.00
          </div>
          <div className='text-lg md:text-xl text-white opacity-80'>
            $500.00
          </div>
        </div>

        <div className='
          flex flex-row gap-4 p-4
          bg-gradient-to-br from-gray-800 to-black
          border-4 border-blue-600 rounded-xl
          shadow-lg shadow-blue-700/70
          w-full
          relative overflow-hidden
          before:content-[""] before:absolute before:inset-0
          before:bg-gradient-to-b before:from-blue-400/10 before:to-transparent
          before:rounded-xl before:pointer-events-none
        '>
          <div className='absolute top-0 left-0 right-0 h-2 bg-blue-400/50 rounded-t-lg blur-sm'></div>
          <div className='absolute bottom-0 left-0 right-0 h-2 bg-purple-400/50 rounded-b-lg blur-sm'></div>

          <div className='
            bg-gray-950 h-36 w-36 md:h-40 md:w-50
            rounded-md border-2 border-blue-600
            shadow-inner shadow-blue-800/50
            flex items-center justify-center
            text-7xl font-bold text-blue-300
            overflow-hidden
            relative
            before:content-[""] before:absolute before:inset-0
            before:bg-gradient-to-t before:from-transparent before:to-white/10
            before:rounded-md before:pointer-events-none
            translate-y-0.5
          '>
            {items[randomId[0]].icon}
          </div>
          <div className='
            bg-gray-950 h-36 w-36 md:h-40 md:w-50
            rounded-md border-2 border-blue-600
            shadow-inner shadow-blue-800/50
            flex items-center justify-center
            text-7xl font-bold text-blue-300
            overflow-hidden
            relative
            before:content-[""] before:absolute before:inset-0
            before:bg-gradient-to-t before:from-transparent before:to-white/10
            before:rounded-md before:pointer-events-none
            translate-y-0.5
          '>
            {items[randomId[1]].icon}
          </div>
          <div className='
            bg-gray-950 h-36 w-36 md:h-40 md:w-50
            rounded-md border-2 border-blue-600
            shadow-inner shadow-blue-800/50
            flex items-center justify-center
            text-7xl font-bold text-blue-300
            overflow-hidden
            relative
            before:content-[""] before:absolute before:inset-0
            before:bg-gradient-to-t before:from-transparent before:to-white/10
            before:rounded-md before:pointer-events-none
            translate-y-0.5
          '>
            {items[randomId[2]].icon}
          </div>
        </div>

        <div className='
          w-full bg-gray-900 border-t-2 border-gray-700
          rounded-b-2xl p-4 mt-6
          shadow-inner shadow-gray-700/30
          flex justify-center items-center gap-4 md:gap-8
          text-sm md:text-base
        '>
          <button
            onClick={generateRandomIds}
            className='
              px-6 py-3 rounded-full
              bg-gradient-to-br from-green-500 to-green-700
              text-white text-xl font-bold uppercase
              shadow-lg shadow-green-700/50
              hover:from-green-600 hover:to-green-800
              active:scale-95 transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-green-400
              disabled:opacity-50 disabled:cursor-not-allowed
            '
            disabled={lifeCount === 0}
          >
            SPIN
          </button>

          <button
            onClick={handleRefresh}
            className='
              px-6 py-3 rounded-full
              bg-gradient-to-br from-blue-500 to-blue-700
              text-white text-xl font-bold uppercase
              shadow-lg shadow-blue-700/50
              hover:from-blue-600 hover:to-blue-800
              active:scale-95 transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-blue-400
            '
          >
            REFRESH
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdvanceLottery
