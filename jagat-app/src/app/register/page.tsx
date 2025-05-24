import React from 'react';
import Link from 'next/link'; 

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Register</h1>
        
        <form className="flex flex-col space-y-4 text-white">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div>
            <label className="block mb-1">Confirm Password</label>
            <input type="password" className="w-full px-3 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Submit
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-4">
          Already have an account?{' '}
          <Link href="/" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
