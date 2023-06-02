import React from 'react'
import Header from '../../Components/Header'
import Inprogress from '../../Components/Inprogress'
import { Link } from 'react-router-dom'
const Edtech = () => {
  return (
    <>

    <Inprogress />
    <Header />
    
    <div className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
     <div className='mt-[64px]'>
     <div className='text-[gray] font-Nunito text-[18px] md:text-[24px]'><Link to="/" className='text-[#1e1e1e]'>Home</Link>/ <Link to="/" className='text-[#1e1e1e]'>Works</Link> / Edtech style guide</div>
     {/* Header */}
     <div className='md:text-[48px] text-[34px] text-center mt-[60px] font-Gambetta font-semibold'>
     Edtech style guide for nursery kids to learn the alphabets
        </div>
        {/* Tools & Timeline */}
        <div className='mt-[23px] flex flex-col md:flex-row gap-[10px]  md:justify-between'>
          <div>
            <h3 className= 'text-[24px] font-Gambetta md:text-[32px]'>Tools</h3>
            <p  className=' gap-[8px] mt-[4px] flex items-center'><p className='text-[20px] text-[#504A4A]'>Figma </p></p>
          </div>
          <div>
          <h3 className='text-[24px] mt-[24px] font-Gambetta md:text-[32px]'>Timeline</h3>
          <p className='text-[#504A4A] text-[20px]'>1 day</p>
          </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Edtech