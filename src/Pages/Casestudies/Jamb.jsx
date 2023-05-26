import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import src from '../../assets/link.svg'
import issues from '../../assets/issues.png'
import issues2 from '../../assets/issues2.png'
import issues3 from '../../assets/issues3.png'
import sketch from '../../assets/sketch.png'
import Home from '../../assets/Home.png'
import Register from '../../assets/Register.png'
import Quicklinks from '../../assets/Quicklinks.png'
import News from '../../assets/News.png'
import Footer from '../../assets/Footer.png'
import Inprogress from '../../Components/Inprogress'
const Jamb = () => {
  return (
    <>
    <Inprogress />
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
          <p className='text-[#504A4A] text-[20px]'>1 week</p>
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
          <p className='text-[20px] mt-[20px] text-[#504A4A]'>In order to gather insights from users, I conducted physical interviews with three participants. During these interviews, several key findings emerged, providing valuable input for this case study.</p>
          <img className='mt-[20px]' src={issues2} />
          <img className='mt-[10px]' src={issues3} />
          <p className='text-[20px] mt-[20px] text-[#504A4A]'>These findings informed my design decisions for the JAMB homepage redesign. Users desire easy access to information, a clear navigation system, and consistent text styles. Incorporating these insights, I aim to create a user-friendly design that improves information accessibility and enhances the overall user experience.</p>
        </div>
        {/* The design */}
        <div className='font-Nunito mt-[60px]'>
          <h2 className='text-[32px] font-Gambetta'>The design</h2>
          <p className='text-[20px] mt-[20px] text-[#504A4A]'>I used a special design system called Naija Design System. I kept the important parts of the design similar to what they already had but made a few changes. I added some new sections and wrote words to go along with the design. This way, the JAMB homepage will look nice and fit well with the other designs.</p>
        {/* Sketches */}
        <div className='font-Nunito mt-[30px]'>
          <h2 className='text-[22px] font-Gambetta'>Sketches</h2>
          <p className='text-[20px] mt-[5px] text-[#504A4A]'>From the insights i got from the user research i decided to come up with some sketches </p>
          <img className='mt-[10px' src={sketch} />
        </div>
        {/* Main design */}
        <div>
          <h2 className='text-[22px] font-Gambetta'>User Interface</h2>
          <div>
            <h2>Home</h2>
            <p>This screen allows the user at a glimpse and enable them to navigate through the whole app</p>
            <img src={Home} />
          </div>
          <div>
            <h2>Register</h2>
            <p>This screen helps the user know who the register of jamb is and jamb's mandate "sometimes they as this question in jamb"
            </p>
            <img src={Register} />
          </div>
          <div>
            <h2>Quick links</h2>
            <p>This screen helps the user navigate through the other parts of the app without having to scroll up</p>
            <img src={Quicklinks} />
          </div>
          <div>
            <h2>News</h2>
            <p>This screen helps the user to view latest jamb news and what is happing around the examination</p>
            <img src={News} />
          </div>
          <div>
            <h2>Footer</h2>
            <p>This screen has the contact details and little info for the users</p>
            <img src={Footer} />
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Jamb
