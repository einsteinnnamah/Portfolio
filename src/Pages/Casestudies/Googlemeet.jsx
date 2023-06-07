import React from 'react'
import Header from '../../Components/Header'
import Inprogress from '../../Components/Inprogress'
import { Link } from 'react-router-dom'
import img1 from '../../assets/Googlemeet/img1.png'
import img2 from '../../assets/Googlemeet/img2.png'
import img3 from '../../assets/Googlemeet/img3.png'
import img4 from '../../assets/Googlemeet/img4.png'
const Googlemeet = () => {
  return (
    <>

    <Inprogress />
    <Header />
    
    <div className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
     <div className='mt-[64px]'>
     <div className='text-[gray] font-Nunito text-[18px] md:text-[24px]'><Link to="/" className='text-[#1e1e1e]'>Home</Link>/ <Link to="/" className='text-[#1e1e1e]'>Works</Link> / Googlemeet</div>
        {/* Header */}
        <div className="md:text-[48px] text-[34px] text-center mt-[60px] font-Gambetta font-semibold">
        UI/UX audit for Google meet call
        </div>
        {/* Tools & Timeline */}
        <div className="mt-[23px] flex flex-col md:flex-row gap-[10px]  md:justify-between">
            <div>
              <h3 className="text-[24px] font-Gambetta md:text-[32px]">
                Tools
              </h3>
              <p className="text-[20px] text-[#504A4A]">Figma </p>
            </div>
            <div>
              <h3 className="text-[24px] mt-[24px] font-Gambetta md:text-[32px]">
                Timeline
              </h3>
              <p className="text-[#504A4A] text-[20px]">1 day</p>
            </div>
          </div>
                    {/* OVerview */}
                    <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Overview</h2>
            <p className="text-[20px] text-[#504A4A]">
            This UX audit of Google Meet revealed a notable issue when accepting new participants while screen sharing. 
            </p>
          </div>
                      {/* Problem */}
                      <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Problem</h2>
            <p className="text-[20px] text-[#504A4A]">
            During the UI/UX audit of Google Meet, a significant issue was discovered related to the user experience when another user wants to join a meet call while the screen sharing feature is active. Currently, if a user is actively sharing their screen during a meeting and another participant tries to join the call, the user is required to navigate from the screen sharing to the Meet call interface to accept the incoming participant. This interruption in the user flow can disrupt the meeting and cause inconvenience for both the screen sharing user and other participants in the meeting. 
            </p>
            <div>
            <img className='mt-2' src={img1} />
            <img className="mt-2" src={img2} />
            </div>
          </div>
                         {/* Solution */}
                         <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Solution</h2>
            <p className="text-[20px] text-[#504A4A]">
            To improve the user experience, it is recommended that Google Meet introduces a more seamless solution for accepting new participants while screen sharing. This could involve providing an in-screen sharing interface option to accept or decline new participants without the need to switch between interfaces. By addressing this issue, Google Meet can enhance the usability and efficiency of the platform, ensuring a smoother and uninterrupted experience for users engaging in screen sharing sessions while accommodating new participants joining the call. 
            </p>

            <div>
            <img className='mt-2' src={img3} />
            <img className='mt-2' src={img4} />
            </div>
          </div>
          <h1>Thanks for reading!</h1>
     </div>
    </div>
    </>
  )
}

export default Googlemeet
