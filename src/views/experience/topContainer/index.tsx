import Image from 'next/image'
import React from 'react'

type Props = {}

const TopContainer = (props: Props) => {
    return (
        <div className='grid md:grid-cols-2 justify-items-center md:px-12 gap-12'>
            <div>
                <div className='relative w-full md:w-[542px]  h-[338px]'>
                    <Image
                        alt=''
                        fill={true}
                        priority
                        className='object-cover'
                        src={"/images/p2.jpg"}
                        sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
                        unoptimized
                    />
                </div>
                <div className='px-4 md:pr-24 mt-6'>
                    <h1 className='text-[16px] md:text-[20px] text-center md:text-start text-[#454543] mb-6 font-mono opacity-60 '>
                        True to life images that tell your story
                    </h1>
                    <div className='md:hidden'>
                        <p className='text-[15px] text-start font-serif text-[#454543] mb-4'>
                            Find the photographer that will document your day to the fullest can be a full time job - I hope to make this task a little easier.

                        </p>
                        <p className='text-[15px] text-start font-serif text-[#454543]'>



                            My goal with every story I photograph is to create photos in a photojournalistic and unobtrusive way to help you to remember the day as it really happened. No overly staged moments, awkward poses, or over-the-top props - just you and all the realness of your day.
                        </p>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[15px] text-start font-serif text-[#454543] mb-4'>

                            When you look through your wedding photographs, my hope is that you are transported back to the very moment they were taken. I believe that photography should be more than just a collection of pretty pictures; it should be a window into the emotions, feelings, and memories of your special day.
                        </p>
                        <p className='text-[15px] text-start font-serif text-[#454543]'>

                            My approach is to capture the raw, unscripted moments that make your wedding day unique - the laughs, the tears, the quiet moments of reflection. By doing so, I strive to create a visual story that reflects the essence of who you are as a couple. So when you view your images, you'll not only see the beauty of the day, but you'll remember exactly how it felt
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative w-[342px]  h-[478px]'>
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