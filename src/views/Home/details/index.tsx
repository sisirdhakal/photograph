import React from 'react'
import { GridContainer } from '../style'

type Props = {}

const Details = (props: Props) => {
  return (
    <>
      {/* <GridContainer> */}
      <div className='py-8'>
        <div className='grid grid-cols-3'>
          <div className='border-r-2 border-clrgrey8 py-8'>
            <p className='text-center tracking-wider text-xs text-[#bb9c8b]'>
              01
            </p>
            <h1 className='text text-clrgrey3 text-center tracking-wide uppercase'>Portfolio</h1>
          </div>
          <div className='border-r-2 border-clrgrey8 py-6 '>
            <p className='text-center tracking-wider text-xs text-[#bb9c8b]'>
              02
            </p>
            <h1 className='text text-clrgrey3 text-center tracking-wide uppercase'>The experience</h1>
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