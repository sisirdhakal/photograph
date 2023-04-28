import Image from 'next/image'
import React from 'react'

type Props = {}

const TopContainer = (props: Props) => {
    return (
        <div className='grid md:grid-cols-2 lg:gap-16 lg:px-16'>
            <div className='py-12 px-4 md:pl-14'>
                <div className=''>
                    <p className='text-[#81817a] text-[14px] md:text-[12px] mb-5'>DOCUMENTING TIMELESS PHOTOS OF LOVE STORIES</p>
                    <p className='text-[#81817a] font-serif text-[26px] md:text-[24px] mb-10'>
                        Photos that last for generations to come of some of lives most treasured moments
                    </p>
                    <p className='text-[#454543] text-[14px] font-medium leading-7'>
                        I've been fortunate to have preserved countless stories over the last 11 years - I would love to tell yours next. I believe in photographing every life event and moment as it truly happens - from the gentle happy tear streaming down your face to the little embraces to the big elaborate dances and fireworks - everything captured and remembered.
                    </p>
                </div>
            </div>
            <div>
                <div className='relative w-[88%] max-w-[400px] md:w-[417px] mx-auto  h-[622px]'>
                    <Image
                        alt=''
                        fill={true}
                        priority
                        className='object-cover'
                        src={"/images/img1.jpg"}
                        sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    )
}

export default TopContainer