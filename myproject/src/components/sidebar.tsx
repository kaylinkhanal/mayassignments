import React from 'react';

const userList = [
  { name: "ABC", isOnline: true },
  { name: "DEF", isOnline: false },
  { name: "GHI", isOnline: true },
  { name: "JKL", isOnline: false },
];

const UserCard = (props) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-800 rounded-lg text-white">
      <span>{props.name}</span>
      <span
        className={`h-3 w-3 rounded-full ${props.isOnline ? 'bg-green-500' : 'bg-red-500'}`}
        title={props.isOnline ? 'Online' : 'Offline'}
      ></span>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#1f2937] w-64 min-h-screen p-6 shadow-xl rounded-r-2xl">
      <h1 className="text-2xl font-bold mb-8 text-white tracking-wide select-none">
        👥 Active Users
      </h1>
      <ul className="space-y-3 text-base font-medium">
        {userList.map((item, id) => (
          <UserCard key={id} name={item.name} isOnline={item.isOnline} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
