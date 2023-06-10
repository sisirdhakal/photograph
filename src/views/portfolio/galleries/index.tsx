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
                    {
                        galleryList.map(item => {
                            return <div key={item.id}>
                                <div className='relative w-[80%] h-[400px] md:w-[100%] md:max-w-[296.66px]  mx-auto md:h-[209.77px]'>
                                    <Image
                                        alt=''
                                        fill={true}
                                        priority
                                        className='object-cover'
                                        src={item.img}
                                        sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                                        unoptimized
                                    />
                                </div>
                                <p className='text-[9.6px] mt-3 text-[#878787] text-center tracking-wider font-serif uppercase'>{item.name}</p>
                                <h1 className='text-[21.6px] text-[#81817a] font-medium text-center capitalize'> {item.title} </h1>
                                <p className='text-[12.8px] text-[#b9b1a7] font-semibold tracking-wide text-center capitalize '>{item.location}</p>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Gallery


export const galleryList = [
    {
        id: 1,
        name: "classic",
        img: "/images/p1.webp",
        title: "test",
        location: "nepal"
    },
    {
        id: 2,
        name: "nature",
        img: "/images/p2.webp",
        title: "test",
        location: "nepal"
    },
    {
        id: 3,
        name: "life style",
        img: "/images/11.webp",
        title: "test",
        location: "nepal"
    },
]