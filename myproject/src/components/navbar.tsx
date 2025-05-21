import React from 'react'

const Navbar = () => {
return (
<div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 shadow-lg rounded-b-xl">
<div className="flex flex-row justify-between items-center">

<h1 className="text-white text-3xl font-bold tracking-wide select-none">
💬 ChatBox
</h1>

<div className="flex gap-10">
<h1 className="text-white text-lg font-medium hover:text-indigo-100 transition-all duration-200 cursor-pointer">
Home
</h1>
<h1 className="text-white text-lg font-medium hover:text-indigo-100 transition-all duration-200 cursor-pointer">
Chat
</h1>
<h1 className="text-white text-lg font-medium hover:text-indigo-100 transition-all duration-200 cursor-pointer">
Users
</h1>
</div>
</div>
</div>
)
}

export default Navbar
