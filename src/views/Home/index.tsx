import Background from '@/components/Background'
import React from 'react'
import Details from './details'
import AboutSection from './aboutsection'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className=''>
            <Background />
            <Details />
            <AboutSection />
        </div>
    )
}

export default Home