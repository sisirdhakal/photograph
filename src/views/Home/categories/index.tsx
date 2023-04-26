import Image from 'next/image'
import React from 'react'

type Props = {}

const Categories = (props: Props) => {
    return (
        <div className='px-8 lg:px-16 py-10'>
            <div className='grid md:grid-cols-3 gap-6 lg:px-8'>
                <div>
                    <div className='relative w-full mx-auto max-w-[342px]  h-[500px]  lg:h-[478px]'>
                        <Image
                            alt=''
                            fill={true}
                            priority
                            className='object-cover'
                            src={"/images/c1.jpg"}
                            sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                        />
                    </div>
                    <h1 className='text mt-3 text-clrgrey3 text-center tracking-wider font-serif uppercase'>Engagements</h1>
                </div>
                <div>
                    <div className='relative w-full max-w-[342px]  h-[500px] mx-auto  lg:h-[478px]'>
                        <Image
                            alt=''
                            fill={true}
                            priority
                            className='object-cover'
                            src={"/images/c2.jpg"}
                            sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                        />
                    </div>
                    <h1 className='text mt-3 text-clrgrey3 text-center tracking-wider font-serif uppercase'>Weddings</h1>
                </div>
                <div>
                    <div className='relative w-full  max-w-[342px]  h-[500px] mx-auto  lg:h-[478px]'>
                        <Image
                            alt=''
                            fill={true}
                            priority
                            className='object-cover'
                            src={"/images/c3.jpg"}
                            sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                        />
                    </div>
                    <h1 className='text mt-3 text-clrgrey3 text-center tracking-wider font-serif uppercase'>Life Style</h1>
                </div>
            </div>
        </div>
    )
}

export default Categories