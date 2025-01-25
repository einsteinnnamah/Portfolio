import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto font-Satoshi gap-[24px] font-semibold md:px-[60px] xl:px-[120px] px-[20px] py-[100px] text-white flex md:flex-row flex-col justify-between'>
      <div className='text-[18px] md:text-[20px]'>
        <h3 className=''>Kigali, Rwanda</h3>
        <a href='mailto:einsteinnnamah@gmail.com"' className='hover:underline underline-offset-2 cursor-pointer' >einsteinnnamah@gmail.com</a>
      </div>
      <div>
        <div className='flex gap-[20px] text-[18px] md:text-[20px]'>
          <a className='hover:underline underline-offset-2' href='https://www.instagram.com/einstein_nnamah/' target='_blank' >IG</a>
          <a className='hover:underline underline-offset-2' href='https://twitter.com/einstein_nnamah' target='_blank'>TW</a>
          <a className='hover:underline underline-offset-2' href='https://www.behance.net/einsteinnnamah' target='_blank' >BE</a>
          <a className='hover:underline underline-offset-2' href='https://github.com/einsteinnnamah' target='_blank'>GIT</a>
          <a className='hover:underline underline-offset-2' href='https://medium.com/@einsteinnnamah' target='_blank' >MD</a>
        </div>
        <h3 className=' text-[18px] md:text-[20px]'>All Rights Reserved. © 2024 einsteinnnamah</h3>
      </div>
    </div>
  )
}

export default Footer