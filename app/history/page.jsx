import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import HistoryContainer from './HistoryContainer'

const page = () => {
  return (
    <div className="font-ebGaramond">
      <Suspense>
        <Navbar />
        <HistoryContainer />
        <Subscribe />
        <Footer />
      </Suspense>
    </div>
  )
}

export default page
