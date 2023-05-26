import React from 'react'
import Header from '../../Components/Header'
import Inprogress from '../../Components/Inprogress'
import { Link } from 'react-router-dom'

const Arteshots = () => {
  return (
    <>

    <Inprogress />
    <Header />
    
    <div className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
     <div className='mt-[64px]'>
     <div className='text-[gray] font-Nunito text-[18px] md:text-[24px]'><Link to="/" className='text-[#1e1e1e]'>Home</Link>/ <Link to="/" className='text-[#1e1e1e]'>Works</Link> / Arteshots</div>
     Coming soon
     </div>
    </div>
    </>
  )
}

export default Arteshots
