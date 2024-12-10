import React from 'react'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'

const page = () => {
  return (
    <div className="font-ebGaramond">
      <Navbar />
      <ContactForm />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default page
