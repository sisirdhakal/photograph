import React from 'react'

type Props = {}

const Descriptions = (props: Props) => {
    return (
        <div className='grid md:grid-cols-2 lg:gap-12 lg:px-16 justify-items-center'>
            <div className='py-12 px-4 md:px-16 leading-6 font-sans'>
                <p className='text-[#454543] text-[14px] mb-4'>

                    I'm a self taught photographer, with a special love for weddings and meeting new people. My photography style is editorial and airy with a journalistic spin. I have over 10 years of experience photographing weddings and as cliché as it sounds, I can't image loving any "job" more.
                </p>

                <p className='text-[#454543] text-[14px]'>

                    I was born and raised in South Georgia (still have the accent) and I've lived all over the East Coast from Brooklyn to Miami. I've recently settled in Atlanta, Georgia and I'm so excited to meet new couples here!
                </p>
            </div>
            <div className='py-12 px-4 md:px-16 leading-6 font-sans'>
                <p className='text-[#454543] text-[14px] mb-4'>
                    I've been married for 11 years to my high school sweetheart and we were lucky enough to welcome our son, Henry, to the family in 2020. I'm an overly excited mom that knows the importance of documenting the fleeting moments.
                </p>
                <p className='text-[#454543] text-[14px]'>
                    And a few random facts about me: I've been a vegetarian for 11 years and counting, I have a Bachelor's degree in Psychology from the University of Georgia (Go Dawgs!) and I'm always listening to a true crime podcast. <br />
                    I can't wait to learn about you and your story!
                </p>

            </div>
        </div>
    )
}

export default Descriptions