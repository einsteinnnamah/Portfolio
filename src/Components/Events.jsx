import React from 'react'
import pic from '../../src/assets/pics2.png'

const Events = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-3'>
        <div className='w-full bg-[#FFF1F1] flex items-center justify-center rounded-2xl text-xl col-span-1 md:col-span-2 h-[350px]'>
            Events
        </div>
        <div className='w-full col-span-1 h-[350px]'>
            <img src={pic} alt='' className='w-full object-cover' />
        </div>
    </div>
  )
}

export default Events