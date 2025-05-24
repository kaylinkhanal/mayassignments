// pages/login.jsx
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white text-slate-800 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-5 flex items-center justify-center">
          LOGIN
        </h2>
        <form className="space-y-5">
          {/* <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" /> */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me?
            </label>
            <a href="#" className="text-pink-500">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold transition  ">
            LOGIN
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
          Need an account?{" "}
          <Link href="/signup" className="text-pink-500 font-medium">
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
