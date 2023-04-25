import React from 'react'

type Props = {}

const Infos = (props: Props) => {
    return (
        <div className='bg-[#F3F1E9] py-10'>
            <div>
                <h1 className='text-[#454543] text-center font-medium tracking-wide text-3xl mb-3'>Kind Words</h1>
                <p className='text-[15.2px] leading-6 font-medium text-[#454543] mb-6 w-[860px] text-center mx-auto'>
                    Book Brandi now for your wedding!! Brandi was amazing to work with- not only is her work absolutely stunning, she’s chill, professional, and was SO helpful on my wedding day helping with random things outside her responsibilities, like putting my veil on and helping me with my bustle. She knows exactly what’s going to photograph well but also works with you to make sure you’re comfortable and having fun. She also turned around our wedding photo preview in literally 24 hours after our wedding! I can’t rave about Brandi more, she’s amazing!!
                </p>
                <p className='text-[15.2px] leading-6 font-medium text-[#454543] mb-8 capitalize w-[860px] text-center mx-auto'>
                    - maria
                </p>

                <p className='text-[15.2px] leading-6 tracking-widest text-[#81817a] capitalize w-[860px] text-center cursor-pointer mx-auto underline'>Read More</p>
            </div>
        </div>
    )
}

export default Infos