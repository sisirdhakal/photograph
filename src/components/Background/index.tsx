import Image from 'next/image'
import React from 'react'

type Props = {}

function Background({ }: Props) {
    return (
        <div>
            <div className='relative h-[1000px]'>
                <Image
                    alt=''
                    fill={true}
                    priority
                    className='object-fit'
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