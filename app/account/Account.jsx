'use client'

import Image from 'next/image'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const Account = () => {
  const { logOut, user } = UserAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await logOut()
      router.push('/signin')
      console.log('You are logged out')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-[76hv] mb-[35px]">
      <div className="flex flex-col items-center justify-center mt-[120px] bg-Jungle text-Beige mx-8 my-8 rounded-xl p-8 h-full">
        <h1 className="text-center text-2xl font-bold py-4">Account</h1>
        {user && user.displayName ? (
          <div className="text-center text-3xl font-bold py-4">
            <p>Welcome, {user.displayName}!</p>
            <div className="flex items-center justify-center p-8">
              <Image
                src={user.photoURL}
                alt="User Profile"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        ) : (
          <div className="text-center text-3xl font-bold py-4">
            <p>Welcome, {user && user.email}</p>
          </div>
        )}
        <button
          onClick={handleSignOut}
          className="py-3 px-7 my-auto mx-auto block"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Account
