import React from 'react'
import TopContainer from './topContainer'
import Descriptions from './descriptions'
import ImageSlider from './imageSilder'
import FAQ from './faq'

type Props = {}

const Experience = (props: Props) => {
    return (
        <div>
            <TopContainer />
            <Descriptions />
            <ImageSlider />
            <FAQ />
        </div>
    )
}

export default Experience