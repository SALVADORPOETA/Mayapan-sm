'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MayapanTextSection from '../components/MayapanTextSection'
import HistoryText from './HistoryText'
import MayapanImage from '../components/MayapanImage'
import MayapanTextP2 from '../components/MayapanTextP2'
import Arrow from '../components/Arrow'
import axios from 'axios'
// import historyData from '../components/data/historyData'

const SkeletonSection = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-96 w-full rounded-md mb-4"></div>
    </div>
  )
}

const HistoryContainer = () => {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const scrollToId = searchParams.get('scrollToId')

  useEffect(() => {
    if (scrollToId && history.length > 0) {
      const element = document.getElementById(scrollToId)
      if (element) {
        const yOffset = -100
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [scrollToId, history])

  useEffect(() => {
    const apiURL = 'https://mayapan-api-sm.vercel.app/history'
    axios
      .get(apiURL)
      .then((response) => {
        setHistory(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="m-8 mt-[120px]">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <SkeletonSection key={index} />)
        : history.map((item) => (
            <div key={item.id.toString()}>
              <div
                key={item.id}
                id={item.id.toString()}
                className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-8 md:pt-8 md:pb-16 lg:px-0 lg:py-0 my-8 bg-Jungle border border-Beige rounded-lg"
              >
                {item.id % 2 !== 0 ? (
                  <>
                    <div className="hidden md:flex lg:hidden col-span-12 md:bg-Goldenrod md:rounded-t-lg md:border-t md:border-x lg:border-0 lg:bg-Jungle">
                      <MayapanTextSection section={item.section} />
                    </div>
                    <>
                      <div className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:p-8 md:col-span-12 md:bg-Goldenrod lg:bg-Jungle md:border-x lg:border-0 lg:rounded-lg">
                        <div className="flex mb-8 md:mb-0 md:items-end md:col-span-7 lg:mb-auto lg:col-span-8 lg:mr-8 rounded-lg bg-Goldenrod md:rounded-none lg:rounded-lg border md:border-0 lg:border">
                          <HistoryText
                            id={item.id}
                            section={item.section}
                            p1={item.p1}
                            p2={item.p2}
                          />
                        </div>
                        <div className="flex h-full justify-center items-center md:mr-4 lg:mr-0 md:col-span-5 md:max-h-full md:max-w-full lg:col-span-4 md:bg-Goldenrod lg:bg-Jungle">
                          <MayapanImage
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            className="inline border"
                          />
                        </div>
                      </div>
                      <div className="hidden md:flex lg:hidden col-span-12 md:bg-Goldenrod md:border-x md:border-b lg:border-0 md:rounded-b-lg lg:rounded-none">
                        <MayapanTextP2 p2={item.p2} />
                      </div>
                    </>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex lg:hidden col-span-12 md:bg-Goldenrod md:rounded-t-lg md:border-t md:border-x lg:border-0">
                      <MayapanTextSection section={item.section} />
                    </div>
                    <div className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-12 md:p-0 lg:p-8 md:col-span-12 items-end md:bg-Goldenrod lg:bg-Jungle md:border-x lg:border-x-0 lg:rounded-lg">
                      <div className="flex h-full md:col-span-5 md:max-h-full md:max-w-full md:justify-center md:items-center lg:max-h-full lg:col-span-4 md:ml-4 lg:ml-0">
                        <MayapanImage
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          className="hidden md:inline border"
                        />
                      </div>
                      <div className="mb-8 md:mb-0 md:col-span-7 lg:mb-auto lg:col-span-8 bg-Goldenrod border md:border-0 lg:border rounded-lg lg:ml-8">
                        <HistoryText
                          key={item.id}
                          id={item.id}
                          section={item.section}
                          p1={item.p1}
                          p2={item.p2}
                        />
                      </div>
                      <div className="flex h-full col-span-5 max-h-full max-w-full justify-center items-center md:p-0">
                        <MayapanImage
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          className="inline border md:hidden"
                        />
                      </div>
                    </div>
                    <div className="hidden md:flex lg:hidden col-span-12 md:bg-Goldenrod md:border-x md:border-b md:rounded-b-lg md:rounded-none">
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

export default HistoryContainer
