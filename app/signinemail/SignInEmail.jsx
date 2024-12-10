'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const SignInEmail = () => {
  const [error, setError] = useState('')

  return (
    <div className="h-[82vh] mt-[120px] mb-12 md:mb-6 lg:mb-4 xl:mb-0">
      <div className="bg-Jungle text-Beige mx-8 mb-8 rounded-xl border">
        <div>
          <h1 className="text-center pt-12 pb-4 text-3xl md:text-4xl">
            Sign In to <span className="text-Turquoise">Your </span>Account
          </h1>
          <p className="text-center py-2 pb-4 text-xl md:text-2xl">
            {`Don't you have an account yet?`}
            <Link
              href="/signupemail"
              className="border-b-4 border-Terracotta ml-2"
            >
              Sign Up!
            </Link>
          </p>
        </div>
        <form className="pb-12 px-8 md:px-16 lg:px-32">
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium pl-8">Email</label>
            <input
              type="email"
              className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 w-full focus:outline-none text-Goldenrod caret-inherit"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium pl-8">Password</label>
            <input
              type="password"
              className="border border-Beige bg-slate-200 rounded-3xl shadow-lg p-3 w-full focus:outline-none text-Goldenrod caret-inherit"
            />
          </div>
          {error && (
            <p className="text-center py-2 text-xl md:text-2xl">
              The Email or the Password is not valid. Please try again.
            </p>
          )}
          <div className="w-full flex items-center justify-center">
            <button className="w-[95%] py-3 px-7 my-4 hover:scale-105">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInEmail
