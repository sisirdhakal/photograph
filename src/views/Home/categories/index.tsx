import Image from 'next/image'
import React from 'react'

type Props = {}

const Categories = (props: Props) => {
    return (
        <div className='px-8 lg:px-16 py-10'>
            <div className='grid md:grid-cols-3 gap-6 lg:px-8'>
                {
                    categoriesList.map(item => {
                        return <div key={item.id}>
                            <div className='relative w-full mx-auto max-w-[342px]  h-[500px]  lg:h-[478px]'>
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
                            <h1 className='text mt-3 text-clrgrey3 text-center tracking-wider font-serif uppercase'>{item.name}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories

export const categoriesList = [
    {
        id: 1,
        name: "classic",
        img: "/images/c1.jpg"
    },
    {
        id: 2,
        name: "nature",
        img: "/images/c2.webp"
    },
    {
        id: 3,
        name: "life style",
        img: "/images/c3.webp"
    },
]