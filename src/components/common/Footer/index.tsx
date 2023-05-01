import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

type Props = {}

function Footer({ }: Props) {
    return (
        <div>
            <div className='lg:flex justify-between items-center py-5 lg:px-24'>
                <div className="w-[200px] mx-auto lg:w-full">
                    <h5 className='text-[#454543] text-xs flex items-center'>
                        <span className='text-center '>COPYRIGHTS ©AATRIYASHOTS {new Date().getFullYear()}</span>
                    </h5>
                </div>
                <div className="w-[200px] mx-auto lg:w-full">
                    <h1 className='text-[#454543] text-[10px] uppercase tracking-wider text-center lg:text-end'>Back to Top</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer