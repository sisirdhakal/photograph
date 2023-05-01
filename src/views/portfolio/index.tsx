import Background from '@/components/Background'
import React from 'react'
import BgChildren from './bgChildren'
import Gallery from './galleries'
import NavbarMiddle from '@/components/common/NavbarMiddle'
import Bottom from './bottom'
import ImageSlider from './imageSlider'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div>
            <div className='bg-black'>

                <Background bgImageSrc='/images/10.webp' portfolio={true} classString={'h-[360px] md:h-[600px]'} bgChildren={<BgChildren />} />
            </div>
            <Gallery />
            <div className='py-4'>
                <ImageSlider />

            </div>
            <Bottom />
            <NavbarMiddle />
        </div>
    )
}

export default Portfolio