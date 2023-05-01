import React from 'react'

type Props = {}

interface FAQS {
    qns: string,
    ans: string
}

const faqs: FAQS[] = [
    {
        qns: 'Where are you located - do you travel?',
        ans: `I've lived all over the East Coast but I'm currently based in Atlanta, Georgia. I love to travel and photograph all over the world!`
    },
    {
        qns: `How many images do we receive and when?`,
        ans: `The total number of images varies from wedding to wedding depending on the events of the day! On average you can expect 75-100 images per hour of coverage.<br/>I deliver a curated preview of your wedding images within 48 hours of your wedding day. From there you can expect your full gallery within 8-10 weeks.`
    },
    {
        qns: `How do we book - what's required?`,
        ans: `I'm currently booking for the 2023/2024 wedding seasons! I try to make the booking process as simple as possible. To officially book I require a signed contract and a nonrefundable deposit.`
    },
    {
        qns: `How much are your wedding collections?`,
        ans: `My base collection starts at $6000 and all my collections are customizable depending on your specific wedding details. Email me to receive the full wedding guide and all the collections details!`
    },
    {
        qns: `What's included in the wedding collections?`,
        ans: `All of my collections comes with a print and download release for all the hi-res digital images. I don't have an image cut off or charge by the images, so you receive all the edited digital images from your wedding day in a personalized online gallery! Timeline consultations are also included in all wedding collections. Second shooters, engagement sessions, prints and albums can also be added to any collection (and are included in a few).`
    },
    {
        qns: `Should we book an engagement session?`,
        ans: `I loooove engagement sessions and getting to work with couples before their wedding day. However, they're not a requirement and you will still get amazing photos even if you can't do an engagement session. I work with a lot of couples that live out of state, so we meet for the first time on the wedding day (other than online meetings).`
    },
]

const FAQ = (props: Props) => {
    return (
        <div className='pt-8 pb-24'>
            <h1 className='text-[#b9b1a7] text-center text-[40px] font-serif mb-12'>FAQ</h1>
            <div className='grid lg:grid-cols-2 justify-items-center w-[84%] gap-14 lg:gap-20 mx-auto'>
                {
                    faqs.map((faq: FAQS, index: number) => {
                        const { qns, ans } = faq
                        return <div key={index}>
                            <div>
                                <h1 className='text-[#b9b1a7] text-[22px] mb-4'>
                                    {qns}
                                </h1>
                                <p className='text-[#454543] text-[14.5px] font-serif leading-6'>
                                    {ans}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default FAQ