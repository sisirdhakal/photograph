import React from 'react'

type Props = {}

const BgChildren = (props: Props) => {
    return (
        <div className='absolute w-[70%] sm_1:w-[360px]  md:w-[400px] z-20 top-14 lg:top-24 h-[66%] max-w-[340px] sm_1:max-w-none max-h-[440px] md:max-h-[540px] flex justify-center items-end md:h-[400px]'>
            <p className='text-[85.375px] font-serif font-medium text-black tracking-wider'>
                PORTFOLIO
            </p>
        </div>
    )
}

export default BgChildren