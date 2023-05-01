import Image from 'next/image'
import React from 'react'

type Props = {}

const Bottom = (props: Props) => {
    return (
        <div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute w-full z-20 top-24 '>
                    <p className='text-[40px] font-serif font-medium text-white tracking-wider uppercase text-center'>
                        Aatriyagraphy <br />
                        and films
                    </p>

                </div>
                <div className='absolute w-full z-20 bottom-24'>
                    <button className='bg-[#b9b1a7] mt-8 py-3 text-sm w-48 px-6 lg:px-10 text-white block mx-auto rounded-xs transition-all ease-linear duration-300 hover:text-clrgrey3 font-light'>
                        Lets Chat
                    </button>
                </div>
                <div className={`relative w-full h-[500px] bg-black `}>
                    <Image
                        alt=''
                        fill={true}
                        priority
                        className='object-cover opacity-80'
                        src={'/images/18.webp'}
                        unoptimized
                        sizes="(min-width: 60em) 24vw,
                        (min-width: 28em) 45vw,
                        100vw"
                    />
                </div>
            </div>
        </div>
    )
}

export default Bottom