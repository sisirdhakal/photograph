import Background from '@/components/Background'
import React from 'react'
import Details from './details'
import AboutSection from './aboutsection'
import Categories from './categories'
import Infos from './infos'
import Bookings from './bookings'
import NavbarMiddle from '@/components/common/NavbarMiddle'
import BgChildren from './bgChildren'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className=''>
            <Background
                bgImageSrc="/images/bg.webp"
                // bgChildren={<BgChildren />}
                classString='h-[900px]' />
            <Details />
            <AboutSection />
            <Categories />
            <Infos />
            <Bookings />
            <NavbarMiddle />
        </div>
    )
}

export default Home