import { navbarOptions } from '@/utils/navbar'
import React from 'react'
import { NavbarOptions } from '../interfaces/navbar'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      hello
      <div className='hidden lg:flex items-center justify-center'>
        <ul className='flex justify-center px-2'>
          {navbarOptions.map((link: NavbarOptions) => {
            const { id, text, url } = link
            return (
              <li key={id} className="mx-4 px-2 relative">
                <Link href={url}>
                  <p className='capitalize text-lg tracking-wide text-clrgrey3'>
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