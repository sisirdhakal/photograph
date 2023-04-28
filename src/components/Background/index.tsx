import Image from 'next/image'
import React from 'react'

type Props = {
    bgImageSrc: string;
    portfolio?: boolean;
    bgChildren?: React.ReactNode;
    classString?: string
}

function Background({ bgImageSrc, portfolio, bgChildren, classString }: Props) {
    return (
        <div className='relative flex justify-center items-center'>

            {bgChildren}
            <div className={`relative w-full  ${classString} `}>
                <Image
                    alt=''
                    fill={true}
                    priority
                    className={`object-cover ${portfolio ? 'opacity-80' : ""}`}
                    src={bgImageSrc}
                    unoptimized
                    sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                />
            </div>
        </div>
    )
}

export default Background