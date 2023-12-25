import React from 'react'

const Header = () => {
  return (
    <div className='max-w-[1024px] mx-auto p-2 flex items-center justify-center'>
      <div className='w-full flex items-center font-Nunito font-bold justify-start text-3xl text-white'>
        Einstein.N
      </div>
      <div className='w-full flex items-center justify-end'>
        <span className='bg-white text-black rounded-[10px] inline-block px-[18px] py-2'>
          Book me
        </span>
      </div>
    </div>
  )
}

export default Header