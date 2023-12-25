import React from 'react'

const Header = () => {
  return (
    <div className='max-w-[1440px] mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 flex items-center justify-between'>
      <div className='font-Satoshi font-bold justify-start text-[22px] md:text-[28px] text-white'>
        Einstein.N
      </div>
      <div>
        <button className='bg-white text-black hover:bg-[#FF0000] hover:text-[white] rounded-[10px] ease-in duration-150 font-Satoshi text-[16px] md:text-[18px] font-semibold cursor-pointer inline-block p-[20px] py-2'>
          Buzz me
        </button>
      </div>
    </div>
  )
}

export default Header