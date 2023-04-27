import Background from '@/components/Background'
import React from 'react'
import BgChildren from './bgChildren'
import Gallery from './galleries'
import NavbarMiddle from '@/components/common/NavbarMiddle'
import Bottom from './bottom'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div>
            <div className='bg-black'>

                <Background bgImageSrc='/images/pbg1.jpg' portfolio={true} bgChildren={<BgChildren />} />
            </div>
            <Gallery />
            <Bottom />
            <NavbarMiddle />
        </div>
    )
}

export default Portfolio