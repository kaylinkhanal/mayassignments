import React from 'react'

const Groups = () => {
return (
<div className="bg-[#1f2937] w-[400px] p-6 font-bold text-3xl rounded-lg shadow-lg flex flex-col font-poppins text-[#f9fafb]">
<div className="mb-6">Groups</div>


<ul className="flex flex-col space-y-3 text-lg font-semibold">
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-green-400 shadow-md mr-3"></span>
General
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
React Developers
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
Node.js Experts
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
Express.js Enthusiasts
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
MongoDB Masters
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
Fullstack MERN Devs
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
MERN Beginners
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
MERN Project Team
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
API Integration Squad
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
UI/UX Designers
</li>
<li className="p-3 rounded-lg hover:bg-[#374151] cursor-pointer transition flex items-center">
<span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
DevOps & Deployment
</li>
</ul>
</div>
)
}

export default Groups
