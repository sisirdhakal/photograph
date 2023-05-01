import React from 'react'
import TopContainer from './topContainer'
import Descriptions from './descriptions'
import ImageSlider from './imageSilder'

type Props = {}

const Experience = (props: Props) => {
    return (
        <div>
            <TopContainer />
            <Descriptions />
            <ImageSlider />
        </div>
    )
}

export default Experience