import React from 'react'
import MayapanMeaning from './MayapanMeaning'

const HomeText = ({ id, section, p1, p2 }) => {
  return (
    <div className="w-full justify-center items-center px-4 pb-12 md:mb-0 lg:mb-12 md:py-2">
      <>
        <p className="mt-8 mb-6 font-bold text-4xl md:hidden lg:flex">
          {section}
        </p>
        <p className="mt-0">{p1}</p>
        <p className="mt-4 md:hidden lg:flex">{p2}</p>
        {id === 1 ? (
          <div className="flex md:hidden justify-center items-center mt-4">
            <MayapanMeaning />
          </div>
        ) : null}
      </>
    </div>
  )
}

export default HomeText
