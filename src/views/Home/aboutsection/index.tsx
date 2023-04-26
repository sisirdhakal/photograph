import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutSection = (props: Props) => {
    return (
        <div className='px-8 lg:px-24 md:py-10 md:bg-[#F3F1E9]'>
            <div className='grid md:grid-cols-aboutSection md:gap-12 lg:gap-28'>
                <div className='relative hidden md:block w-[342px]  h-[478px]'>
                    <Image
                        alt=''
                        fill={true}
                        priority
                        className='object-cover'
                        src={"/images/img1.jpg"}
                        sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                    />
                </div>
                <div className='w-full md:pt-4'>
                    <div className='hidden md:block'>
                        <h1 className='text-[#454543] text-center font-medium tracking-wide text-[21.34px] mb-3'>Atlanta Based Wedding & Family Photographer</h1>
                        <p className='text-[15.2px] leading-6 font-medium text-[#454543] lg:mb-14 md:mb-8'>
                            I've been fortunate to have preserved countless stories over the last 11 years. I would love to learn about you and yours next. I believe in photographing every life event and moment as it truly happens - from the gentle happy tear streaming down your face to the little embraces to the big elaborate dances and fireworks - everything captured and remembered.
                        </p>
                    </div>
                    <h2 className='text-lg md:text-[21.34px] text-center md:text-start text-clrgrey1 md:leading-9 mb-5 lg:mb-8'>
                        Freezing life’s most important <br className='hidden md:inline-block' />
                        moments in time forever…
                    </h2>
                    <p className='text-[14.2px] md:text-[15.2px] text-start leading-6 font-medium text-[#454543] '>
                        I love learning the stories of others and create beautiful imagery for them to share with generations to come. My goal is to help you remember all the big and small moments that happen on such a magical day - to capture your wedding day in a timeless way in it’s true form.
                    </p>
                    <button className='bg-[#b9b1a7] hover:bg-[#81817A] md:mt-4 lg:mt-8 py-2 text-[1rem] hidden md:block px-6 lg:px-10 text-white mx-auto rounded-xs transition-all ease-linear duration-300 hover:text-clrgrey2'>
                        The Experience
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection