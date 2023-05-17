import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import src from '../../assets/link.svg'
import issues from '../../assets/issues.png'
const Jamb = () => {
  return (
    <>
    <Header />
    <div  className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
      <div className='mt-[64px]'>
        <div className='text-[gray] font-Nunito text-[18px] md:text-[24px]'><Link to="/" className='text-[#1e1e1e]'>Home</Link>/ <Link to="/" className='text-[#1e1e1e]'>Works</Link> / Jamb</div>
        {/* Header */}
        <div className='md:text-[48px] text-[34px] text-center mt-[60px] font-Gambetta font-semibold'>
        JAMB (Joint Admissions and Matriculation Board) homepage redesign
        </div>
      {/* Tools & Timeline */}
        <div className='mt-[23px] flex flex-col md:flex-row gap-[10px]  md:justify-between'>
          <div>
            <h3 className= 'text-[24px] font-Gambetta md:text-[32px]'>Tools</h3>
            <a target='_blank' href='https://naijadesignsystem.webflow.io/' className=' gap-[8px] mt-[4px] flex items-center'><p className='text-[20px] text-[#504A4A]'>Naija design system </p><img src={src} /></a>
            <a target='_blank' href='https://figma.com/' className=' gap-[8px] mt-[4px] flex items-center'><p className='text-[20px] text-[#504A4A]'>Figma </p><img src={src} /></a>
          </div>
          <div>
          <h3 className='text-[24px] mt-[24px] font-Gambetta md:text-[32px]'>Timeline</h3>
          <p className='text-[#504A4A] text-[20px]'>Undecided</p>
          </div>
        </div>
        {/* OVerview */}
        <div className='mt-[60px] font-Nunito'>
          <h2 className='text-[32px] font-Gambetta'>Overview</h2>
          <p className='text-[20px] text-[#504A4A]'>The project aims to redesign the homepage of the JAMB (Joint Admissions and Matriculation Board) website, which serves as the central hub for information and services related to entrance exams and admissions in Nigeria.</p>
        </div>
        {/* Process */}
        <div className='font-Nunito mt-[60px]'>
          <h2 className='text-[32px] font-Gambetta'> Process </h2>
          <p className='text-[20px] text-[#504A4A]'>To start the project, I looked closely at the JAMB website, like a detective investigating a mystery. I wanted to understand how the website is built and how it works. Just like a house has rooms and furniture, a website has different parts and features. </p>
          <p className='text-[20px] mt-[20px] text-[#504A4A]'>I carefully studied the JAMB website, examining its layout, design elements, and interactive features. This allowed me to understand how things are organized on the screen, such as buttons and forms, and how people can find information and complete important tasks like registration and result checking. My goal was to ensure the website is user-friendly and easy to navigate, making it simple for people to access the information they need with ease.</p>
          <p className='text-[20px] mt-[20px] text-[#504A4A]'> I observed some issues below: </p>
          <img className='mt-[20px]' src={issues} />
        </div>
        {/* User research */}
        <div className='font-Nunito mt-[60px]'>
          <h2 className='text-[32px] font-Gambetta'>User Research</h2>
          <p>Pushing update later today</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Jamb
