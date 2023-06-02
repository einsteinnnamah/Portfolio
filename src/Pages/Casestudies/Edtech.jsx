import React from "react";
import Header from "../../Components/Header";
import Inprogress from "../../Components/Inprogress";
import { Link } from "react-router-dom";
import color1 from "../../assets/Edtech/color1.png";
import color2 from "../../assets/Edtech/color2.png";
import banner1 from "../../assets/Edtech/banner1.png"
import banner2 from "../../assets/Edtech/banner2.png"
import iconer from "../../assets/Edtech/iconer.png"
import inputs from "../../assets/Edtech/inputs.png"
import typo from "../../assets/Edtech/typo.gif"
const Edtech = () => {
  return (
    <>
      <Inprogress />
      <Header />

      <div className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
        <div className="mt-[64px]">
          <div className="text-[gray] font-Nunito text-[18px] md:text-[24px]">
            <Link to="/" className="text-[#1e1e1e]">
              Home
            </Link>
            /{" "}
            <Link to="/" className="text-[#1e1e1e]">
              Works
            </Link>{" "}
            / Edtech style guide
          </div>
          {/* Header */}
          <div className="md:text-[48px] text-[34px] text-center mt-[60px] font-Gambetta font-semibold">
            Edtech style guide for nursery kids to learn the alphabets
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
              This design guide is all about making learning the alphabet super
              fun for little kids like you! It helps create a colorful and
              exciting interface that will make exploring letters a joyful
              adventure.
            </p>
          </div>
          {/* Color Palette */}
          <div className="mt-[60px] font-Nunito">
            <div className="flex gap-[30px] md:items-center">
              <div className="md:w-[218px] w-full h-[112px] bg-[#3131F5] rounded-[10px]"></div>
              <p className="text-[20px] md:w-[906px] text-[#504A4A]">
                <span className="font-Gambetta text-[#1e1e1e] font-semibold">
                  Blue
                </span>{" "}
                is known for its calming and soothing properties. It evokes
                feelings of tranquility and stability, which are beneficial for
                a learning environment. By using different shades of blue, i aim
                to create a serene atmosphere that fosters focus and
                concentration.
              </p>
            </div>
          </div>
          <div className="mt-[20px] font-Nunito">
            <div className="flex gap-[30px] md:items-center">
              <div className="md:w-[218px] w-full h-[112px] bg-[#FFCF25] rounded-[10px]"></div>
              <p className="text-[20px] md:w-[906px] text-[#504A4A]">
                <span className="font-Gambetta text-[#1e1e1e] font-semibold">
                  Yellow,
                </span>
                on the other hand, is a color associated with joy, energy, and
                happiness. By incorporating various shades of yellow, i aim to
                infuse the interface with a vibrant and cheerful atmosphere.
              </p>
            </div>
          </div>
          <div className="mt-[60px] flex flex-col items-center justify-center font-Nunito">
            <p className="text-[20px] md:w-[906px] text-[#504A4A]">
              i combined blue and yellow to strike a balance between calmness
              and liveliness. Blue provides a stable foundation, promoting focus
              and concentration, while yellow adds an element of joy and energy.
              This harmonious synergy creates an environment that is both
              engaging and conducive to learning.
            </p>
            <div>
              <img className="mt-[20px]" src={color1} />
              
            </div>
            <p className="text-[20px] mt-[10px] font-semibold  text-[#504A4A]">
              Support{" "}
            </p>
            <img src={color2} />
            </div>
            {/* Typography */}
          <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Typography</h2>
            <p className="text-[20px] text-[#504A4A]">
            The typography choices i made for the this style guide were focusing on creating a child-friendly and easily readable interface for nursery kids learning the alphabet that aims to enhance legibility, simplicity, and overall engagement with the educational content.
            </p>
            <div className="mt-[20px] flex justify-center"><img src={typo} /></div>
            <p className="text-[20px] mt-[15px] text-[#504A4A]">
            Through careful consideration of colors and typography, I successfully developed several iterations that effectively utilize the chosen color palette and child-friendly fonts
            </p>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 justify-center">
                <img src={banner1} />
                <img src={banner2} />
            </div>
          </div>
          {/* Iconography */}
          <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Iconography</h2>
            <p className="text-[20px] text-[#504A4A]">
            Iconography plays a crucial role in visually reinforcing concepts and aiding comprehension. The selected icons aim to be relatable, intuitive, and age-appropriate, providing meaningful visual cues for young learners.
            </p>
            <div className="flex justify-center">
                <img  src={iconer} />
            </div>
           
          </div>
          {/* Inputfields */}
          <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Inputfields</h2>
         
            <div className="flex justify-center">
                <img  src={inputs} />
            </div>
          </div>
          {/* Resources used */}
          <div className="mt-[60px] font-Nunito">
            <h2 className="text-[32px] font-Gambetta">Resources used</h2>
            <p className="text-[20px] text-[#504A4A]">
            Fourthcanvas -Pennee: <a target='_blank' href='https://fourthcanvas.co/works/pennee'>Link</a>
            </p>
            <p className="text-[20px] text-[#504A4A]">
            Youtube video: <a target='_blank' href='https://www.youtube.com/watch?v=zXXkJvIkPWc'>Link</a>
            </p>
            <p className="text-[20px] text-[#504A4A]">
            Cynthia Ugwudike’s design: <a target='_blank' href='https://www.behance.net/gallery/135766409/Task-App-For-Kids-A-UX-Case-Study'>Link</a>
            </p>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Edtech;
