import React from 'react'
import { GridContainer } from '../style'

type Props = {}

const Details = (props: Props) => {
  return (
    <>
      {/* <GridContainer> */}
      <div className='py-8'>
        <div className='grid md:grid-cols-3'>
          <div className=' md:border-r-2 border-clrgrey8 py-8'>
            <p className='text-center tracking-wider text-xs text-[#bb9c8b]'>
              01
            </p>
            <h1 className='border-b-2 md:border-b-0 w-fit mx-auto md:w-full border-clrgrey8 pb-2 md:pb-0 px-5 md:px-0 text-clrgrey3 text-center tracking-wide uppercase'>Portfolio</h1>
          </div>
          <div className='md:border-r-2 border-clrgrey8 py-6 '>
            <p className='text-center tracking-wider text-xs text-[#bb9c8b]'>
              02
            </p>
            <h1 className='border-b-2 md:border-b-0 w-fit mx-auto md:w-full border-clrgrey8 pb-2 md:pb-0 text-clrgrey3 text-center tracking-wide uppercase'>The experience</h1>
          </div>
          <div className=' py-6'>
            <p className='text-center tracking-wider text-xs text-[#bb9c8b]'>
              03
            </p>
            <h1 className='text text-clrgrey3 text-center tracking-wide uppercase'>meet brandi</h1>
          </div>
        </div>
      </div>
      {/* </GridContainer> */}
    </>
  )
}

export default Details