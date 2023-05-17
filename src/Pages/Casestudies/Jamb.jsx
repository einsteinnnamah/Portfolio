import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
const Jamb = () => {
  return (
    <>
    <Header />
    <div  className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
      <div className='mt-[64px]'>
        <div className='text-[gray] font-Nunito text-[24px]'><Link to="/" className='text-[#1e1e1e]'>Home</Link>/ <Link to="/" className='text-[#1e1e1e]'>Works</Link> / Jamb</div>
        {/* Header */}
        <div className='text-[48px] text-center mt-[60px] font-Gambetta font-semibold'>
        JAMB (Joint Admissions and Matriculation Board) homepage redesign
        </div>

        <div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Jamb
