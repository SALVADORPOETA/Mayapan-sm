import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

const MayapanImage = ({ image, title, description, className }) => {
  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)
  const modalRef1 = useRef(null)
  const modalRef2 = useRef(null)

  useEffect(() => {
    const handleOutsideClick1 = (event) => {
      if (modalRef1.current && !modalRef1.current.contains(event.target)) {
        setIsModalOpen1(false)
      }
    }

    const handleOutsideClick2 = (event) => {
      if (modalRef2.current && !modalRef2.current.contains(event.target)) {
        setIsModalOpen2(false)
      }
    }

    if (isModalOpen1) {
      document.addEventListener('mousedown', handleOutsideClick1)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick1)
    }

    if (isModalOpen2) {
      document.addEventListener('mousedown', handleOutsideClick2)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick2)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick1)
      document.removeEventListener('mousedown', handleOutsideClick2)
    }
  }, [isModalOpen1, isModalOpen2])

  const handleImageClick1 = () => {
    setIsModalOpen1(true)
  }

  const handleCloseModal1 = () => {
    setIsModalOpen1(false)
  }

  const handleImageClick2 = () => {
    setIsModalOpen2(true)
  }

  const handleCloseModal2 = () => {
    setIsModalOpen2(false)
  }

  return (
    <div className="md:max-h-full flex items-center justify-center lg:max-h-[350px] md:p-0">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        onClick={handleImageClick1}
        className={`rounded-lg hover:scale-105 ease-in-out duration-500 cursor-pointer h-full w-full md:max-h-[250px] lg:max-h-[350px] bg-Beige ${className}`}
      />
      {isModalOpen1 && (
        <div className="fixed inset-0 top-[90px] flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div
            ref={modalRef1}
            className="bg-Terracotta border p-5 rounded-xl shadow-lg max-w-[500px]"
          >
            <div className="grid grid-cols-2 mb-4">
              <div className="col-span-1 flex justify-center items-center p-2">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={300}
                  onClick={handleImageClick2}
                  className={
                    'mx-auto my-4 rounded-[20%] hover:scale-105 ease-in-out duration-300 cursor-pointer border'
                  }
                />
                {isModalOpen2 && (
                  <div className="fixed inset-0 top-[90px] flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div
                      ref={modalRef2}
                      className="bg-Turquoise p-5 rounded-none shadow-lg max-w-full max-h-full overflow-auto relative"
                    >
                      <div className="flex justify-center items-center w-full h-full bg-gray-300">
                        <Image
                          src={image}
                          alt={title}
                          style={{ objectFit: 'contain' }}
                          width={1000}
                          height={1000}
                        />
                        <div className="absolute top-4 right-4 lg:right-8 p-4">
                          <IoIosCloseCircle
                            className="bg-Beige rounded-full text-Terracotta/90 text-6xl lg:text-7xl cursor-pointer hover:scale-105 ease-in-out duration-300"
                            onClick={handleCloseModal2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-2xl mb-4">{title}</h1>
                <p>{description}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 rounded-lg border"
                onClick={handleCloseModal1}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MayapanImage
