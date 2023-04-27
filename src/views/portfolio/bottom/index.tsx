import Image from 'next/image'
import React from 'react'

type Props = {}

const Bottom = (props: Props) => {
    return (
        <div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute w-full z-20 top-24 '>
                    <p className='text-[40px] font-serif font-medium text-white tracking-wider text-center'>
                        ATLANTA GEORGIA <br />
                        PHOTOGRAPHER
                    </p>

                </div>
                <div className={`relative w-full h-[500px] bg-black `}>
                    <Image
                        alt=''
                        fill={true}
                        priority
                        className='object-cover opacity-80'
                        src={'/images/pbg4.jpg'}
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