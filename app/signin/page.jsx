import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignIn from './SignIn'

const page = () => {
  return (
    <div className="font-ebGaramond">
      <Navbar />
      <SignIn />
      <Footer />
    </div>
  )
}

export default page
