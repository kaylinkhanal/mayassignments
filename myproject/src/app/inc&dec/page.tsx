'use client'
import { decrement, increment } from '@/redux/reducerSlices/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Inc = () => {
  const { value } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-4xl font-bold mb-6 text-gray-800">{value}</div>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Inc
