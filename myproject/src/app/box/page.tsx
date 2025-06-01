'use client'
import {
  changeColor,
  changeToCircle,
  decrementHeight,
  decrementWidth,
  incrementHeight,
  incrementmarginBottom,
  incrementmarginLeft,
  incrementmarginRight,
  incrementmarginTop,
  incrementWidth,
} from '@/redux/reducerSlices/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const box = () => {
  const dispatch = useDispatch()
  const {
    backgroundColor,
    width,
    height,
    marginLeft,
    borderRadius,
    marginTop,
  } = useSelector((state) => state.box)

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans gap-10 p-6">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(incrementmarginTop())}
            className="bg-yellow-400 text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition"
          >
            ↓
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(incrementmarginRight())}
            className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition"
          >
            ←
          </button>
          <button
            onClick={() => dispatch(incrementmarginLeft())}
            className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition"
          >
            →
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(incrementmarginBottom())}
            className="bg-yellow-400 text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition"
          >
            ↑
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={() => dispatch(incrementHeight())} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">+ HEIGHT</button>
        <button onClick={() => dispatch(decrementHeight())} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">- HEIGHT</button>
        <button onClick={() => dispatch(incrementWidth())} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">+ WIDTH</button>
        <button onClick={() => dispatch(decrementWidth())} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">- WIDTH</button>
        <button onClick={() => dispatch(changeToCircle())} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">[TRANSFORM]</button>
        <input
          onChange={(e) => dispatch(changeColor(e.target.value))}
          placeholder="change color"
          className="border px-3 py-2 rounded shadow text-center"
        />
      </div>

      <div
        className="transition-all duration-300 shadow-2xl"
        style={{
          backgroundColor,
          width,
          height,
          marginLeft,
          marginTop,
          borderRadius,
        }}
      ></div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Radius</div>
          <div className="text-xl font-bold text-indigo-600">{width / 2}</div>
        </div>
        <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Width</div>
          <div className="text-xl font-bold text-blue-600">{width}</div>
        </div>
        <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Height</div>
          <div className="text-xl font-bold text-green-600">{height}</div>
        </div>
        <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Area</div>
          <div className="text-xl font-bold text-pink-600">{height * width}</div>
        </div>
      </div>
    </div>
  )
}

export default box
