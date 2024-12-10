'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const SignUpEmail = () => {
  const [error, setError] = useState('')

  return (
    <div className="h-[82vh] mt-[120px] mb-20 md:mb-6 lg:mb-4 xl:mb-0">
      <div className="bg-Jungle text-Beige mx-8 mb-40 md:mb-8 rounded-xl border">
        <div>
          <h1 className="text-center pt-12 pb-4 text-3xl md:text-4xl">
            Sign Up for a <span className="text-Turquoise">Free</span> account
          </h1>
          <p className="text-center py-2 text-xl md:text-2xl">
            Already have an account yet?
            <Link
              href="/signinemail"
              className="border-b-4 border-Terracotta ml-2"
            >
              Sign In!
            </Link>
          </p>
        </div>
        <form className="pb-12 px-8 md:px-16 lg:px-32">
          <div className="flex flex-col py-2">
            <label className="py-2 pl-8">Add an Email Address</label>
            <input
              type="email"
              className="border border-Beige bg-slate-200 text-Terracotta caret-inherit rounded-3xl p-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 pl-8">
              Create a password (at least 6 characters)
            </label>
            <input
              type="password"
              className="border border-Beige bg-slate-200 text-Terracotta caret-inherit rounded-3xl p-3 focus:outline-none"
            />
          </div>
          {error && (
            <p className="text-center py-2 text-xl md:text-2xl">
              The Email or Password is not valid. Please try again.
            </p>
          )}
          <div className="w-full flex items-center justify-center">
            <button className="w-[95%] py-3 px-7 my-4 hover:scale-105">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpEmail
