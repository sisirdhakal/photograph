import Background from '@/components/Background'
import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div>
            <Background bgImageSrc='/images/pbg2.jpg' portfolio={true} />
        </div>
    )
}

export default Portfolio