import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Arrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 p-4">
      <BsFillArrowUpCircleFill
        onClick={scrollToTop}
        className="bg-Beige rounded-full border-2 text-Terracotta text-7xl cursor-pointer hover:scale-105 ease-in-out duration-300"
      />
    </div>
  )
}

export default Arrow
