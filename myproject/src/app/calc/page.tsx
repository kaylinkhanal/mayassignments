'use client'
import React, { useState } from 'react'

const Caclulator = () => {
  const [result, setResult] = useState('')
  const buttons = [['7','8','9','/'],['4','5','6','*'],['1','2','3','-'],['0','.','=','+'],['C','(',')','sqrt']]
  const symbols = ['+','-','*','/']

  const handleCalculation = (value) => {
    if (value === 'C') {
      setResult('')
    } else if (value === '=') {
      setResult(eval(result))
    } else if (value === 'sqrt') {
      try {
        const evaluated = eval(result)
        if (evaluated < 0) {
          setResult('Error')
        } else {
          setResult(Math.sqrt(evaluated).toString())
        }
      } catch (e) {
        setResult('Error')
      }
    } else {
      setResult(result + value)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <div className='border border-black w-72 h-12 mb-4 text-right p-2 bg-gray-50 text-xl font-mono rounded shadow'>{result}</div>
        {buttons.map((item,id)=>(
          <div key={id} className='flex'>
            {item.map((val,idx)=>(
              <button key={idx} onClick={()=>handleCalculation(val)} className={`text-white p-4 m-2 w-16 h-16 rounded font-semibold text-lg shadow ${symbols.includes(val)||val==='='||val==='sqrt'?'bg-gray-500 hover:bg-gray-600':val==='C'?'bg-red-500 hover:bg-red-600':'bg-black hover:bg-gray-800'}`}>{val}</button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Caclulator
