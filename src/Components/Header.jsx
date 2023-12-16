import React from 'react'

const Header = () => {
  return (
    <div className='w-full p-2 flex items-center justify-center'>
      <div className='w-full flex items-center md:justify-end font-Nunito font-bold justify-start text-3xl text-black'>
        Einstein.N
      </div>
      <div className='w-full flex items-center justify-end'>
        <span className='bg-black/90 text-white rounded-[30px] inline-block px-[18px] py-2'>
          Book me
        </span>
      </div>
    </div>
  )
}

export default Header