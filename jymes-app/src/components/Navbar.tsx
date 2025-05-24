import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold text-amber-500">गफगाफ !</div>
      <div className="flex gap-8 text-sm font-semibold">
        <Link href="/" className="hover:text-indigo-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-indigo-400 transition">
          About
        </Link>
        <Link href="/users" className="hover:text-indigo-400 transition">
          Users
        </Link>
      </div>
      <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
      {/* Placeholder for user avatar or icon */}
    </nav>
  );
};

export default Navbar;
