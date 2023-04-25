import { navbarOptions } from '@/utils/navbar'
import React from 'react'
import { NavbarOptions } from '../interfaces/navbar'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <div className='hidden lg:flex py-[30px] px-[72px] mx-auto items-center justify-center'>
        <ul className='flex w-full items-center justify-between'>
          {navbarOptions.map((link: NavbarOptions) => {
            const { id, text, url } = link
            if (id == 3) {
              return <li key={id} className="mx-4 px-2 relative">
                <Link href={url}>
                  <p className='capitalize text-3xl tracking-wide text-clrgrey2'>
                    {text}
                  </p>
                </Link>
              </li>
            }
            return (
              <li key={id} className="mx-4 px-2 relative">
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
    </div>
  )
}

export default Header