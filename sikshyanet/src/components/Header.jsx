"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-blue-600">
          <Link href="/">ShikshyaNet</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex gap-4">
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-white bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
