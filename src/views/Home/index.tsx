import Background from '@/components/Background'
import React from 'react'
import Details from './details'
import AboutSection from './aboutsection'
import Categories from './categories'
import Infos from './infos'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className=''>
            <Background />
            <Details />
            <AboutSection />
            <Categories />
            <Infos />
        </div>
    )
}

export default Home