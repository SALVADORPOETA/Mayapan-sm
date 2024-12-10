import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignInEmail from './SignInEmail'

const page = () => {
  return (
    <div className="font-ebGaramond">
      <Navbar />
      <SignInEmail />
      <Footer />
    </div>
  )
}

export default page
