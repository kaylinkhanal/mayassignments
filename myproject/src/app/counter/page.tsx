'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [num, setNum] = useState(1)

  const increment = () => {
    if (num < 10) {
      setNum(num + 1)
    } else {
      alert('Number cannot go above 10')
    }
  }

  const decrement = () => {
    if (num > 0) {
      setNum(num - 1)
    } else {
      alert('Number cannot go below 0')
    }
  }

  return (
    <div>
      <h2 className="text-xl mb-2">Count: {num}</h2>

      <button 
        className='bg-pink-300 p-3 text-green mr-2 rounded'
        onClick={decrement}
      >
        - 
      </button>

      <button 
        className='bg-pink-300 p-3 text-green rounded'
        onClick={increment}
      >
        +  
      </button>
    </div>
  )
}

export default Counter
