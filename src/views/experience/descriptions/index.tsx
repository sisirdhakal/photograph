import React from 'react'

type Props = {}

const Descriptions = (props: Props) => {
    return (
        <div className='  '>
            <div className='bg-[#F3F1E9] hidden lg:grid grid-cols-4 py-5 px-8 text-[#454543] text-[13px] gap-10 tracking-wider font-serif'>
                <p>CONSULTATIONS</p>
                <p>WEDDING DAY COVERAGE</p>
                <p>MEMORIES</p>
                <p>THE DELIVERABLES</p>
            </div>
            <div className=' grid lg:grid-cols-4 text-[13.4px] py-5 px-5 lg:px-8 gap-10 text-[#454543]   lg:text-[12.6px] leading-[22px] lg:leading-5 tracking-wide font-serif'>
                <div>
                    <p className='lg:hidden text-[14.5px] mb-4'>CONSULTATIONS</p>
                    <p className='lg:hidden'>
                        While I can't take the place of a wedding planner (worth their weight in gold), I will help make sure you have the best photography timeline and help with any wedding decisions with unlimited communication.
                    </p>
                    <p className='mb-5 hidden lg:block'>
                        I understand that your day is not just about capturing beautiful images, but also ensuring that everything runs smoothly. While I cannot take the place of a wedding planner (worth their weight in gold), I am here to support you in any way I can.
                    </p>
                    <p className='hidden lg:block'>

                        From helping you create the perfect photography timeline to offering suggestions for the best locations and lighting for your portraits, I am here to make sure that you have the best possible experience on your wedding day.
                    </p>
                </div>
                <div>
                    <p className='lg:hidden text-[14.5px] mb-4'>WEDDING DAY COVERAGE</p>
                    <p className='lg:hidden'>
                        Relax and enjoy your wedding day knowing that every moments is being documented. I will photograph all the candid moments throughout the day and help you know what to do with your hands during the portraits.
                    </p>
                    <p className='mb-5 hidden lg:block'>
                        On your wedding day, my goal is to capture every moment - from the big, emotional moments to the small, candid ones. I want you to relax and enjoy your special day, knowing that every moment is being documented.
                    </p>
                    <p className='hidden lg:block'>
                        My approach is to capture the natural beauty of your day, without forcing any awkward or uncomfortable poses. So let's have fun, relax, and create beautiful memories together.
                    </p>
                </div>
                <div>
                    <p className='lg:hidden text-[14.5px] mb-4'>DELIVERABLES</p>
                    <p className='lg:hidden'>
                        Every couple I photograph will receive a customized online gallery with all the professionally edited, hi res images. Through the gallery you can print, share and download all of the images and cherish your memories forever.
                        I also offer an array of heirloom albums that are professionally designed and printed to be passed down for generations to come.
                    </p>
                    <p className='mb-5 hidden lg:block'>
                        I understand how excited you are to see your wedding photos, so I won't make you wait long. Within 48 hours of your special day, I will send you a curated preview of some of the highlights from your wedding.
                    </p>
                    <p className='hidden lg:block'>
                        This way, you can relive the memories while you wait for the full gallery to be completed. Your full gallery will become ready for you within 8-10 weeks after your wedding day.
                    </p>
                </div>
                <div>
                    <p className='mb-5 hidden lg:block'>
                        I believe that your wedding day memories should last a lifetime, which is why I provide you with a personalized online gallery of high-resolution digital images after your special day. This gallery will give you easy access to all your wedding day memories, so you can print, download, and share them with your loved ones.
                    </p>
                    <p className=' hidden lg:block'>
                        Whether you want to create a stunning wedding album or simply share the memories on social media, the gallery makes it easy to relive the magic of your special day whenever you want.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Descriptions