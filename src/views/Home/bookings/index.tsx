import Image from 'next/image'
import React from 'react'

type Props = {}

const Bookings = (props: Props) => {
    return (
        <div className='px-16 max-w-[440px] lg:max-w-none mx-auto lg:px-24 py-5 '>
            <div className='border-t-2 border-clrgrey3 '>
                <div className='grid lg:grid-cols-auto lg:gap-14 items-center py-3 border-b-2 border-clrgrey8'>
                    <div className='relative mx-auto w-[202px]  h-[134px]'>
                        <Image
                            alt=''
                            fill={true}
                            priority
                            unoptimized
                            className='object-fit'
                            src={"/images/book.webp"}
                            sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                        />
                    </div>
                    <div className='border-y lg:border-y-0 lg:border-x my-5 lg:my-0 py-5 lg:py-10 border-clrgrey6'>
                        <p className='text-3xl text-center text-[#454543] '>Atlanta Based Wedding & <br /> Family Photographer</p>
                        <p className='text-sm text-[#454543] mt-4 text-center'>Currently booking for 2023 & 2024</p>
                    </div>
                    <div className=''>
                        <button className='bg-[#b9b1a7] hover:bg-[#81817A] mt-8 py-4 text-[1rem] w-52 px-6 lg:px-10 text-white block mx-auto rounded-xs transition-all ease-linear duration-300 hover:text-clrgrey2'>
                            Lets Chat
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bookings