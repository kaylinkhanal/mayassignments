// pages/register.jsx
import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-5 flex justify-center">Register</h2>
        <form className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded"
            />
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded"
          />

          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-semibold">
            SIGN UP
          </button>
        </form>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-center gap-4 mb-4 text-xl">
          <button className="p-2 hover:bg-gray-200 rounded">
            <img src="google.png" className="w-6 h-6" alt="Google" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded">
            <img src="facebook.png" className="w-6 h-6" alt="Facebook" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded">
            <img src="linkedin.png" className="w-6 h-6" alt="LinkedIn" />
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Already have an Account ?
          <Link href="/login" className="text-pink-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
