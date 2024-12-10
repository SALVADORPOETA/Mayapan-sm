'use client'

import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const Subscribe = () => {
  const { user, logOut } = UserAuth()
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
    <div className="w-full text-center pt-40 mt-8 font-ebGaramond bg-Jungle text-Turquoise">
      <h1 className="mx-20 text-4xl">{`Join our Mayapan's community!`}</h1>
      <div className="flex items-center justify-center p-8 text-xl">
        {user ? (
          <button onClick={handleSignOut} className="mt-2 px-16 py-3">
            Log Out
          </button>
        ) : (
          <Link href="/signin">
            <button className="mt-2 px-16 py-3">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Subscribe
