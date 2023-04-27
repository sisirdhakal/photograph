import Background from '@/components/Background'
import React from 'react'
import BgChildren from './bgChildren'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div>
            <Background bgImageSrc='/images/pbg1.jpg' portfolio={true} bgChildren={<BgChildren />} />
        </div>
    )
}

export default Portfolio