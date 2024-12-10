'use client'

import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const Protected = ({ children }) => {
  const { user } = UserAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      router.push('/signin')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return children
}

export default Protected
