import React from 'react'

type Props = {}

const BgChildren = (props: Props) => {
    return (
        <div className='absolute w-[70%] sm_1:w-[360px]  md:w-[400px] z-20 top-14 lg:top-24 h-[66%] max-w-[340px] sm_1:max-w-none max-h-[440px] md:max-h-[540px] flex justify-center items-end md:h-[430px]'>
            <div>
                <p className='text-[40px] md:text-[60px] lg:text-[85.375px] font-serif font-medium text-white tracking-wider text-center'>
                    PORTFOLIO
                </p>
                <p className='text-[10.2px] md:text-[15.2px] text-center w-full md:w-[300px] mx-auto leading-6 font-medium text-white '>

                    Timeless photography that preserves the fleeting moments
                </p>
            </div>
        </div>
    )
}

export default BgChildren