import { navbarOptions } from '@/utils/navbar'
import React, { useState } from 'react'
import { NavbarOptions } from '../interfaces/navbar'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  const [classes, setclasses] = useState('hidden')

  const handleHover = (e: React.MouseEvent) => {
    setclasses('block')
  }
  const handleMouseLeave = (e: React.MouseEvent) => {
    setclasses('hidden')
  }
  const toggleNavbar = () => {

  }

  return (
    <div>
      <div className='hidden md:flex  px-[72px] mx-auto items-center justify-center'>
        <ul className='flex w-full items-center justify-between'>
          {navbarOptions.map((link: NavbarOptions) => {
            const { id, text, url } = link
            const options: { name: string, url: string }[] = [
              {
                name: "Meet Me",
                url: "/about"
              },
              {
                name: "My Experience",
                url: "/experience"
              },

            ]
            if (id == 3) {
              return <li key={id} className="mx-4 px-2 py-[30px] relative">
                <Link href={url}>
                  <p className='capitalize text-3xl tracking-wide text-clrgrey2 font-serif'>
                    {text}
                  </p>
                </Link>
              </li>
            }
            if (text === "info") {
              return <div key={id} className="py-[30px] relative" onMouseLeave={handleMouseLeave}>
                <p className='uppercase font-sans text-[0.6rem] cursor-pointer tracking-[0.10rem] text-clrgrey3 ' onMouseEnter={handleHover}>
                  {text}
                </p>
                <ul className={`absolute ${classes} z-50 bg-[#B9B1A7] w-36 mt-6 py-4 -left-14`}>
                  {
                    options.map(item => {
                      return <Link key={item.name} href={item.url}>
                        <li className="text-white mb-2 text-center text-[12px] hover:text-clrgrey3 cursor-pointer">
                          {item.name}
                        </li>
                      </Link>
                    })
                  }
                </ul>
              </div>
            }
            return (
              <li key={id} className="mx-4 px-2 py-[30px] relative">
                <Link href={url}>
                  <p className='uppercase font-sans text-[0.6rem] tracking-[0.10rem] text-clrgrey3'>
                    {text}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='md:hidden py-4 px-9 flex justify-between items-center'>
        <div className=''>

          <Link href={'/home'}>
            <p className='capitalize text-3xl tracking-wide text-clrgrey2 font-serif'>
              BRANDI TOOLE
            </p>
          </Link>
        </div>
        <div className='w-9 h-10 flex justify-center items-center cursor-pointer'>
          <div className='relative w-7 mb-3' onClick={toggleNavbar}>
            <p className='w-7 absolute h-[2px] mt-[12px] bg-[#85857E]'></p>
            <p className='w-6 absolute right-0 h-[2px] mt-[6px] bg-[#85857E]'></p>
            <p className='w-7 absolute h-[2px]  bg-[#85857E]'></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header