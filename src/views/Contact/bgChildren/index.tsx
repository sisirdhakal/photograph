import Image from 'next/image'
import React from 'react'

type Props = {}

const BgChildren = (props: Props) => {
    return (
        <div className='absolute w-[86%] bg-[#F6F6F4] z-20 -top-14 lg:-top-16'>
            <div className='robotoFont'>
                <div className='opacity-80 mx-auto py-4'>
                    <p className='text-center text-[14px] text-[#454543] mb-5'>
                        Thank you for visiting - I can't wait to hear from you!
                    </p>
                    <p className='text-center text-[14px] text-[#454543] max-w-[60%] mx-auto mb-4'>
                        Please fill out the form below with as many details as possible! I'll email you back within 48 hours with my availability and collection pricing!
                    </p>
                    <p className='text-center text-[14px] text-[#454543]'>
                        info@branditoolephoto.com
                    </p>
                </div>
                {/* <p className='text-[40px] md:text-[60px] lg:text-[85.375px] font-serif font-medium text-white tracking-wider text-center'>
                    PORTFOLIO
                </p>
                <p className='text-[10.2px] md:text-[15.2px] text-center w-full md:w-[300px] mx-auto leading-6 font-medium text-white '>

                    Timeless photography that preserves the fleeting moments
                </p> */}
            </div>
        </div>
        // <div className='absolute w-[70%] sm_1:w-[360px]  md:w-[400px] z-20 top-14 lg:top-24 h-[66%] max-w-[340px] sm_1:max-w-none max-h-[440px] md:max-h-[540px]  md:h-[540px]'>

        // </div>
    )
}

export default BgChildren