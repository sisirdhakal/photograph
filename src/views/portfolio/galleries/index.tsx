import Image from 'next/image'
import React from 'react'

type Props = {}

const Gallery = (props: Props) => {
    return (
        <div className='bg-[#F6F6F4] py-10'>
            <div>
                <h1 className='lg:text-[90px] font-serif tracking-wide font-medium uppercase text-[#B9B1A7] text-center'>Galleries</h1>
            </div>
            <div>
                <div className='grid md:grid-cols-3 gap-6 items-center  md:px-4 lg:px-8'>
                    <div>
                        <div className='relative w-[80%] h-[400px] md:w-[100%] md:max-w-[296.66px]  mx-auto md:h-[209.77px]'>
                            <Image
                                alt=''
                                fill={true}
                                priority
                                className='object-cover'
                                src={"/images/p1.jpg"}
                                sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                            />
                        </div>
                        <p className='text-[9.6px] mt-3 text-[#878787] text-center tracking-wider font-serif uppercase'>Weddings</p>
                        <h1 className='text-[21.6px] text-[#81817a] font-medium text-center '> HALEY + JENNA</h1>
                        <p className='text-[12.8px] text-[#b9b1a7] font-semibold tracking-wide text-center '>THE ARBOR LOFT</p>
                    </div>
                    <div>
                        <div className='relative w-[80%] h-[400px] md:w-[100%] md:max-w-[356px] mx-auto md:h-[260px]'>
                            <Image
                                alt=''
                                fill={true}
                                priority
                                className='object-cover'
                                src={"/images/p2.jpg"}
                                sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                            />
                        </div>
                        <p className='text-[9.6px] mt-3 text-[#878787] text-center tracking-wider font-serif uppercase'>Weddings</p>
                        <h1 className='text-[21.6px] text-[#81817a] font-medium text-center '> HALEY + JENNA</h1>
                        <p className='text-[12.8px] text-[#b9b1a7] font-semibold tracking-wide text-center '>THE ARBOR LOFT</p>
                    </div>
                    <div>
                        <div className='relative w-[80%] h-[400px]  md:w-[100%] md:max-w-[296.66px]  mx-auto md:h-[209.77px]'>
                            <Image
                                alt=''
                                fill={true}
                                priority
                                className='object-cover'
                                src={"/images/p3.jpg"}
                                sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                            />
                        </div>
                        <p className='text-[9.6px] mt-3 text-[#878787] text-center tracking-wider font-serif uppercase'>Weddings</p>
                        <h1 className='text-[21.6px] text-[#81817a] font-medium text-center '> HALEY + JENNA</h1>
                        <p className='text-[12.8px] text-[#b9b1a7] font-semibold tracking-wide text-center '>THE ARBOR LOFT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery