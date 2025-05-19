import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
  <div className="bg-teal-500 rounded-xl p-8 shadow-2xl w-80 flex flex-col gap-4">
    <h2 className="text-white font-mono text-2xl text-center">Register Now!</h2>

    <input
      className="border border-white rounded-lg p-2 w-full bg-transparent text-white placeholder-white focus:outline-none shadow-md"
      type="text"
      placeholder="Enter your Name"
      required
    />
    <input
      className="border border-white rounded-lg p-2 w-full bg-transparent text-white placeholder-white focus:outline-none shadow-md"
      type="password"
      placeholder="Create Password"
      required
    />
    <button
      type="submit"
      className="bg-white text-teal-500 rounded-lg py-2 font-semibold hover:bg-teal-100 transition shadow-md"
    >
      Register
    </button>

    <p className="text-white text-sm text-center">
      Already have an account?{' '}
      <Link href="/" className="underline hover:text-teal-200">
        Login Instead
      </Link>
    </p>
  </div>
</div>


  )
}

export default Register