import React from 'react'

const Sidebar = () => {
return (
<div className="flex flex-col bg-[#1f2937] w-64 min-h-screen p-6 shadow-xl rounded-r-2xl">
<h1 className="text-2xl font-bold mb-8 text-white tracking-wide select-none">
👥 Active Users
</h1>

<ul className="space-y-3 text-base font-medium">
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Ram</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Sita</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Gopal</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Maya</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Bikash</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Sujata</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Dipak</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Anita</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Rajesh</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Sushma</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Prakash</li>
<li className="bg-[#374151] text-white px-4 py-3 rounded-xl hover:bg-[#4b5563] transition-all duration-200 cursor-pointer">Kiran</li>
</ul>
</div>
)
}

export default Sidebar
