'use client'

import React, { useEffect, useState } from 'react'
import CitiesModal from './CitiesModal'
import Arrow from '../components/Arrow'
import axios from 'axios'
// import citiesData from '../components/data/citiesData'

const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>
      <div className="h-16 bg-gray-300 rounded-md mb-2"></div>
    </div>
  )
}

const CitiesCards = () => {
  const [cities, setCities] = useState([])
  const [allCities, setAllCities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiURL = 'https://mayapan-api-sm.vercel.app/cities'
    axios
      .get(apiURL)
      .then((response) => {
        const sorted = response.data.sort((a, b) => a.idNum - b.idNum)
        setCities(sorted)
        setAllCities(sorted)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data from API: ', error)
        setLoading(false)
      })
  }, [])

  const filterType = (country) => {
    setCities(allCities.filter((item) => item.country === country))
  }

  return (
    <div className="mt-[120px]">
      <div className="max-w-full m-8 px-8 py-12 bg-Jungle rounded-xl border">
        <h1 className="text-Beige font-bold text-4xl text-center">
          Mayan Cities
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-xl font-bold text-Beige m-4">
              Filter by Country
            </p>
            <div className="flex justify-between max-w-[640px] flex-wrap">
              <button
                className="m-1 px-3 py-1"
                onClick={() => setCities(allCities)}
              >
                All
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Mexico')}
              >
                Mexico
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Guatemala')}
              >
                Guatemala
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Belize')}
              >
                Belize
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('Honduras')}
              >
                Honduras
              </button>
              <button
                className="m-1 px-3 py-1"
                onClick={() => filterType('El Salvador')}
              >
                El Salvador
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index} />)
            : cities.map((item) => (
                <CitiesModal
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  country={item.country}
                />
              ))}
        </div>
      </div>
      <Arrow />
    </div>
  )
}

export default CitiesCards
