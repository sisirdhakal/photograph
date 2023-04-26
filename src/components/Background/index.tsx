import Image from 'next/image'
import React from 'react'

type Props = {}

function Background({ }: Props) {
    return (
        <div className='relative flex justify-center items-center'>
            <div className='absolute w-[70%] sm_1:w-[360px]  md:w-[400px] z-20 top-14 lg:top-24 h-[66%] max-w-[340px] sm_1:max-w-none max-h-[440px] md:max-h-[540px]  md:h-[540px]'>
                <Image
                    alt=''
                    fill={true}
                    priority
                    className='object-cover'
                    src={"/images/marriage.jpg"}
                    sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                />
            </div>
            <div className='relative w-full h-[900px]'>
                <Image
                    alt=''
                    fill={true}
                    priority
                    className='object-cover md:object-fit'
                    src={"/images/test.jpg"}
                    sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                />
            </div>
        </div>
    )
}

export default Background