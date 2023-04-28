import React from 'react'
import BgChildren from './bgChildren'
import Background from '@/components/Background'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div>
            <Background bgImageSrc='/images/con1.jpg' classString='h-[360px] md:h-[550px]' />
            <div className='relative flex justify-center w-full h-[90px]'>
                <BgChildren />
            </div>
        </div>
    )
}

export default Contact