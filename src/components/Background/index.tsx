import Image from 'next/image'
import React from 'react'

type Props = {
    bgImageSrc: string,
    portfolio?: boolean,
    bgChildren?: React.ReactNode;
}

function Background({ bgImageSrc, portfolio, bgChildren }: Props) {
    return (
        <div className='relative flex justify-center items-center'>

            {bgChildren}
            <div className={`relative w-full ${portfolio ? 'h-[360px] md:h-[600px]' : 'h-[900px]'}  `}>
                <Image
                    alt=''
                    fill={true}
                    priority
                    className='object-cover'
                    src={bgImageSrc}
                    sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                />
            </div>
        </div>
    )
}

export default Background