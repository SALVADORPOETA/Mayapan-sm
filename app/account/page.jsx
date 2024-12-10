import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Account from './Account'
import Protected from '../components/Protected'

const page = () => {
  return (
    <Protected className="font-ebGaramond">
      <Navbar />
      <Account />
      <Footer />
    </Protected>
  )
}

export default page
