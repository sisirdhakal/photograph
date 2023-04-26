import { navbarBottomOptions, navbarOptions } from '@/utils/navbar'
import React from 'react'
import { NavbarOptions } from '../interfaces/navbar'
import Link from 'next/link'

type Props = {}

const NavbarMiddle = (props: Props) => {
    return (
        <div className='bg-[#F4F1EC] mt-5'>
            <div className='hidden lg:flex py-[24px] px-[320px] items-center justify-center'>
                <ul className='flex w-full items-center justify-between'>
                    {navbarBottomOptions.map((link: NavbarOptions) => {
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

export default NavbarMiddle