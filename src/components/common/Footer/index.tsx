import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

type Props = {}

function Footer({ }: Props) {
    return (
        <div>
            <div className='flex justify-between items-center py-5 px-24'>
                <div className="">
                    <h5 className='text-[#454543] text-xs flex items-center'>
                        {/* <AiOutlineCopyrightCircle className="text-white/80" /> */}
                        <span className=' '>COPYRIGHTS ©BRANDI TOOLE PHOTOGRAPHY {new Date().getFullYear()}</span>
                    </h5>
                </div>
                <div>
                    <h1 className='text-[#454543] text-[10px] flex items-center uppercase tracking-wider'>Back to Top</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer