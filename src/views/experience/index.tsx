import React from 'react'
import TopContainer from './topContainer'
import Descriptions from './descriptions'
import ImageSlider from './imageSilder'
import FAQ from './faq'
import NavbarMiddle from '@/components/common/NavbarMiddle'
import Outro from './outro'

type Props = {}

const Experience = (props: Props) => {
    return (
        <div>
            <TopContainer />
            <Descriptions />
            <ImageSlider />
            <FAQ />
            <Outro />
            <NavbarMiddle />
        </div>
    )
}

export default Experience