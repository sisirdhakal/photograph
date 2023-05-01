import React from 'react'

type Props = {}

const Outro = (props: Props) => {
    return (
        <div className='my-10'>
            <h1 className='text-center tracking-wider font-sans text-[20px] lg:text-[28px] text-[#454543]'>Atlanta, Georgia Wedding Photographer</h1>
            <p className='text-[#b9b1a7] w-[80%] mx-auto mt-4 lg:mt-0 text-center text-[13px] font-serif tracking-wider'>NOW BOOKING FOR THE 2023 & 2024 WEDDING SEASON</p>
            <div className=''>
                <button className='bg-[#b9b1a7] hover:bg-[#81817A] mt-10 py-3 text-[1rem] w-40 px-6 lg:px-8 text-white block mx-auto rounded-xs transition-all ease-linear duration-300 hover:text-clrgrey2'>
                    Lets Chat
                </button>
            </div>
        </div>
    )
}

export default Outro