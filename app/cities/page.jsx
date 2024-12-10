import React from 'react'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import CitiesCards from './CitiesCards'

const page = () => {
  return (
    <div className="font-ebGaramond">
      <Navbar />
      <CitiesCards />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default page
