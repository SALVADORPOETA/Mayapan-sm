'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logOut } = UserAuth()

  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClick = () => {
    setNav(false)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const handleSignOut = async () => {
    try {
      await logOut()
      router.push('/signin')
      console.log('You are logged Out')
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    handleSignOut()
    handleNavClick()
  }

  const isActive = (path) => pathname === path

  return (
    <nav
      className={
        shadow
          ? 'shadow-xl fixed top-0 left-0 z-50 w-full h-[90px] font-cinzel bg-Jungle/90'
          : 'fixed top-0 left-0 z-50 w-full h-[90px] font-cinzel bg-Jungle'
      }
    >
      <div className="max-w-[1620px] fixed left-0 top-0 w-full z-10">
        <div className="flex mx-auto px-4 xl:px-8 justify-between items-center h-[90px] text-Goldenrod">
          <h1>
            <Link href="/" className="font-bold text-3xl m-2 p-2">
              Mayapan
            </Link>
          </h1>
          <div className="hidden md:flex h-full">
            <ul className="flex items-center font-bold text-xl">
              {user ? (
                <li>
                  <Link
                    href="/account"
                    className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                      isActive('/account') ? 'border-b-4 border-Terracotta' : ''
                    }`}
                  >
                    Account
                  </Link>
                </li>
              ) : null}
              <li>
                <Link
                  href="/"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/history') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/cities"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/cities') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/contact') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              {user ? (
                <button
                  onClick={handleClick}
                  className="ml-4 px-7 py-3 font-normal"
                >
                  Log Out
                </button>
              ) : (
                <Link href="/signin">
                  <button className="ml-4 px-7 py-3 font-normal">
                    Sign In
                  </button>
                </Link>
              )}
            </ul>
          </div>
          <div
            onClick={handleNav}
            className="block md:hidden z-10 text-3xl hover:cursor-pointer"
          >
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <div
            className={
              nav
                ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in-out duration-300 bg-Jungle/95'
                : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in-out duration-300 bg-Jungle'
            }
          >
            <ul className="flex flex-col items-center justify-center min-h-full w-full text-4xl">
              {user ? (
                <li onClick={handleNav} className="p-4 mt-8">
                  <Link
                    href="/account"
                    className={`hover:border-b-4 hover:border-Terracotta mx-3 ${
                      isActive('/account') ? 'border-b-4 border-Terracotta' : ''
                    }`}
                  >
                    Account
                  </Link>
                </li>
              ) : null}
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/history"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/history') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  History
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/cities"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/cities') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  Cities
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <Link
                  href="/contact"
                  className={`hover:border-b-4 mx-3 hover:border-Terracotta ${
                    isActive('/contact') ? 'border-b-4 border-Terracotta' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                {user ? (
                  <button onClick={handleClick} className="m-4 px-7 py-3">
                    Log Out
                  </button>
                ) : (
                  <Link href="/signin">
                    <button onClick={handleNavClick} className="m-4 px-7 py-3">
                      Sign In
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
