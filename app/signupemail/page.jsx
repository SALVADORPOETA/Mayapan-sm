import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignUpEmail from './SignUpEmail'

const page = () => {
  return (
    <div className="font-ebGaramond">
      <Navbar />
      <SignUpEmail />
      <Footer />
    </div>
  )
}

export default page
