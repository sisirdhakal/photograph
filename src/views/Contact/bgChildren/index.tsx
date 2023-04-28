import Image from 'next/image'
import React from 'react'

type Props = {}

const BgChildren = (props: Props) => {
    return (
        <div className='absolute w-[70%] sm_1:w-[360px]  md:w-[400px] z-20 top-14 lg:top-24 h-[66%] max-w-[340px] sm_1:max-w-none max-h-[440px] md:max-h-[540px]  md:h-[540px]'>
            <Image
                alt=''
                fill={true}
                priority
                unoptimized
                className='object-cover'
                src={"/images/con1.jpg"}
                sizes="(min-width: 60em) 24vw,
                                (min-width: 28em) 45vw,
                                100vw"
            />
        </div>
    )
}

export default BgChildren