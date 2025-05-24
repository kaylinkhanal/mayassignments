import React from "react";
import Link from "next/link";

const UserCard = ({ name, isOnline }) => {
  return (
    <Link
      href="#"
      className="flex items-center justify-between bg-gray-700 hover:bg-indigo-600 px-4 py-3 rounded-lg transition group "
    >
      {/* Avatar and Name */}
      <div className="flex items-center space-x-3">
        <div className="bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
          {name.charAt(0)}
        </div>
        <span className="text-white font-medium group-hover:underline">
          {name}
        </span>
      </div>

      {/* Online Status */}
      <div
        className={`w-3 h-3 rounded-full ${
          isOnline ? "bg-green-400" : "bg-gray-400"
        }`}
      ></div>
    </Link>
  );
};

const users = [
  { name: "Ram", isOnline: true },
  { name: "Hari", isOnline: true },
  { name: "Sita", isOnline: false },
  { name: "Gita", isOnline: true },
  { name: "Ramesh", isOnline: false },
  { name: "Shyam", isOnline: true },
];

const Sidebar = () => {
  return (
    <div className="bg-gray-900 w-72 min-h-screen p-6 text-white overflow-y-auto shadow-lg">
      <h2 className="text-2xl font-bold mb-6 border-b pb-3 border-gray-700">
        Users
      </h2>
      <ul className="space-y-4">
        {users.map((user, id) => (
          <li key={id}>
            <UserCard name={user.name} isOnline={user.isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
