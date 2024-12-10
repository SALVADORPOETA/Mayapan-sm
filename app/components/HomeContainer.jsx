'use client'

import React, { useEffect, useState } from 'react'
import HomeText from './HomeText'
import MayapanTextP2 from './MayapanTextP2'
import MayapanMeaning from './MayapanMeaning'
import MayapanTextSection from './MayapanTextSection'
import MayapanImage from './MayapanImage'
import Arrow from './Arrow'
import axios from 'axios'
// import homeData from './data/homeData'

const SkeletonSection = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-80 w-full rounded-md mb-4"></div>
    </div>
  )
}

const HomeContainer = () => {
  const [home, setHome] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiURL = 'https://mayapan-api-sm.vercel.app/home'
    axios
      .get(apiURL)
      .then((response) => {
        setHome(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="m-8">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <SkeletonSection key={index} />)
        : home.map((item) => (
            <div key={item.id}>
              <div
                key={item.id}
                id={item.id}
                className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-8 md:pt-8 md:pb-8 lg:px-0 lg:py-0 my-8 rounded-lg bg-Jungle border border-Beige"
              >
                {item.id % 2 !== 0 ? (
                  <>
                    <div className="hidden md:flex lg:hidden col-span-12 md:bg-Goldenrod md:border-t md:border-x md:border-Beige md:rounded-t-lg">
                      <MayapanTextSection section={item.section} />
                    </div>
                    <>
                      <div
                        className={`pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 md:bg-Goldenrod md:border-x lg:border-x-0 lg:px-8 lg:pt-8 lg:bg-Jungle lg:rounded-lg ${
                          item.id === 1 ? 'lg:pb-0' : 'lg:pb-8'
                        } md:col-span-12`}
                      >
                        <div className="flex mb-8 md:items-end md:col-span-7 md:mb-0 lg:mb-auto lg:col-span-8 lg:mr-8 bg-Goldenrod rounded-lg md:rounded-none border lg:rounded-lg md:border-0 lg:border">
                          <HomeText
                            id={item.id}
                            section={item.section}
                            p1={item.p1}
                            p2={item.p2}
                          />
                        </div>
                        <div className="flex h-full justify-center items-center md:col-span-5 md:max-h-full md:max-w-full lg:col-span-4 md:mr-4 lg:mr-0">
                          <MayapanImage
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            className="inline border"
                          />
                        </div>
                      </div>
                      <div className="hidden md:flex lg:hidden col-span-12 bg-Goldenrod md:rounded-b-lg md:border-b md:border-x">
                        <MayapanTextP2 p2={item.p2} />
                      </div>
                    </>
                    {item.id === 1 ? (
                      <div className="hidden md:grid col-span-12 justify-center items-center md:mt-4 lg:mt-0 mb-8 md:mb-2">
                        <MayapanMeaning />
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex lg:hidden col-span-12 md:bg-Goldenrod md:border-t md:rounded-t-lg md:border-x">
                      <MayapanTextSection section={item.section} />
                    </div>
                    <div className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:p-8 md:col-span-12 items-end md:bg-Goldenrod lg:bg-Jungle md:border-x lg:border-none lg:rounded-lg">
                      <div className="flex h-full md:col-span-5 md:max-h-full md:max-w-full md:justify-center md:items-center lg:max-h-full lg:col-span-4 md:ml-4 lg:ml-0">
                        <MayapanImage
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          className="hidden md:inline border"
                        />
                      </div>
                      <div className="mb-8 md:col-span-7 md:mb-0 lg:mb-auto lg:col-span-8 bg-Goldenrod rounded-lg md:rounded-none lg:rounded-lg border md:border-0 lg:border lg:ml-8">
                        <HomeText
                          key={item.id}
                          id={item.id}
                          section={item.section}
                          p1={item.p1}
                          p2={item.p2}
                        />
                      </div>
                      <div className="flex h-full md:col-span-5 max-h-full max-w-full justify-center items-center md:p-0">
                        <MayapanImage
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          className="inline border md:hidden"
                        />
                      </div>
                    </div>
                    <div className="hidden md:flex lg:hidden col-span-12 bg-Goldenrod border-x border-b rounded-b-lg">
                      <MayapanTextP2 p2={item.p2} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
      <Arrow />
    </div>
  )
}

export default HomeContainer
