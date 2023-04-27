import Background from '@/components/Background'
import React from 'react'
import BgChildren from './bgChildren'
import Gallery from './galleries'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div>
            <Background bgImageSrc='/images/pbg1.jpg' portfolio={true} bgChildren={<BgChildren />} />
            <Gallery />
        </div>
    )
}

export default Portfolio