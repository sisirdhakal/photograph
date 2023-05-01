import React from 'react'
import BgChildren from './bgChildren'
import Background from '@/components/Background'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div>
            <Background bgImageSrc='/images/12.webp' classString='h-[360px] md:h-[700px]' />
            <div className='relative flex justify-center w-full h-[90px]'>
                <BgChildren />
            </div>
        </div>
    )
}

export default Contact