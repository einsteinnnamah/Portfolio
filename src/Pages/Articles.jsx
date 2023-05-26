import React from 'react'
import Inprogress from '../Components/Inprogress'
import Header from '../Components/Header'
import img1 from  '../assets/Writing/Rectangle 6.png'
import airbnb from '../assets/Writing/Airbnb.png'
import brand1 from '../assets/Writing/brand1.png'
import brand2 from '../assets/Writing/brand2.png'

const Articles = () => {
  return (
   <>
   <Inprogress />
   <Header />
   <div  className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
   <div className='mt-[64px]'>
    <div className='md:flex items-center gap-5'>
        <img src={img1} />
        <div className='md:w-[517px]'>
            <h2 className='font-Gambetta text-[#1e1e1e] text-[20px] mt-[10px] md:text-[28px] font-semibold leading-[30px]'>Companies can be missing out on a market, simply because they're not designing for it</h2>
            <p className='font-Nurito text-[gray] mt-[10px]'>Designing for the emerging markets "NEXT BILLION USERS"</p>
            <a target='_blank' href='https://medium.com/design-bootcamp/companies-can-be-missing-out-on-a-market-simply-because-theyre-not-designing-for-it-1815d770e7d9' className='text-[gray] underline font-semibold' >Click to view</a>
        </div>
    </div>
      <div className='md:flex gap-5 mt-10'>
        <img src={airbnb} />
        <div className='md:w-[517px]'>
            <h2 className='font-Gambetta text-[#1e1e1e] text-[20px] mt-[10px] md:text-[28px] font-semibold leading-[30px]'>Designing for Trust</h2>
            <p className='font-Nurito text-[gray] mt-[10px]'>Case Study Airbed and breakfast Aka “Airbnb”"</p>
            <a className='text-[gray] underline font-semibold' target='_blank' href='https://medium.com/@einsteinnnamah/designing-for-trust-2d127f404a2c'>Click to view</a>
        </div>
    </div>
    <div className='md:flex items-center gap-5 mt-10'>
        <img src={brand1} />
        <div className='md:w-[517px]'>
            <h2 className='font-Gambetta text-[#1e1e1e] text-[20px] mt-[10px] md:text-[28px] font-semibold leading-[30px]'>Why Companies Should Take Brand Credibility Seriously</h2>
            <p className='font-Nurito text-[gray] mt-[10px]'>The effect that “lack of brand credibility” causes on companies can’t be overemphasized.</p>
            <a className='text-[gray] underline font-semibold' target='_blank' href='https://medium.com/design-bootcamp/why-companies-should-take-brand-credibility-seriously-14aeb743c995'>Click to view</a>
        </div>
    </div>
    <div className='md:flex items-center gap-5 mt-10'>
        <img src={brand2} />
        <div className='md:w-[517px]'>
            <h2 className='font-Gambetta text-[#1e1e1e] text-[20px] mt-[10px] md:text-[28px] font-semibold leading-[30px]'>What is Brand Entropy</h2>
            <p className='font-Nurito text-[gray] mt-[10px]'>Brand Entropy as the decay of order into chaos — a decent into random acts of branding</p>
            <a className='text-[gray] underline font-semibold' target='_blank' href='https://medium.com/@einsteinnnamah/what-is-brand-entropy-195fe589d373'>Click to view</a>
        </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Articles
