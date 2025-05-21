import React from 'react'
import Message from './message'

const Chatsection = () => {
  return (
  <div className="flex flex-col w-250 bg-[#1f2937] text-[#f9fafb] p-6 rounded-lg shadow-lg font-poppins">
  <div className="mb-6 text-2xl font-semibold tracking-wide">General</div>
  <div className="flex-grow overflow-y-auto space-y-4 mb-4">
  <Message />
    
  </div>

  <div className="flex gap-2">
  <input
  type="text"
  placeholder="Enter message"
  className="flex-grow rounded-md p-2 text-white"
  />
  <button className="bg-indigo-600 px-4 rounded-md text-white font-semibold hover:bg-indigo-700 transition">
  Send
  </button>
  </div>
  </div>
  )
}

export default Chatsection
