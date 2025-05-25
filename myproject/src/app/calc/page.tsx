'use client'
import React, { useState } from 'react'

const Calculator = () => {
  const [result, setResult] = useState('')
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', '(', ')', 'sqrt']
  ]
  const operators = ['+', '-', '*', '/']

  const handleCalculation = (value) => {
    if (value === 'C') {
      setResult('')
    } else if (value === '=') {
      try {
        setResult(eval(result).toString())
      } catch {
        setResult('Error')
      }
    } else if (value === 'sqrt') {
      try {
        const evaluated = eval(result)
        setResult(evaluated < 0 ? 'Error' : Math.sqrt(evaluated).toString())
      } catch {
        setResult('Error')
      }
    } else {
      setResult(result + value)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <div className="mb-6 h-16 bg-gray-100 text-right text-2xl px-4 py-3 rounded-md font-mono tracking-wider border border-gray-200 overflow-x-auto">
          {result || '0'}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.flat().map((btn, idx) => {
            const base =
              'h-14 rounded-lg text-lg font-medium transition transform hover:scale-[1.03] active:scale-[0.97] focus:outline-none'
            let btnClass =
              'bg-gray-200 text-gray-800 hover:bg-gray-300'

            if (btn === 'C') {
              btnClass = 'bg-red-500 text-white hover:bg-red-600'
            } else if (btn === '=') {
              btnClass = 'bg-green-500 text-white hover:bg-green-600'
            } else if (btn === 'sqrt' || operators.includes(btn)) {
              btnClass = 'bg-blue-500 text-white hover:bg-blue-600'
            }

            return (
              <button
                key={idx}
                onClick={() => handleCalculation(btn)}
                className={`${base} ${btnClass}`}
              >
                {btn}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calculator
