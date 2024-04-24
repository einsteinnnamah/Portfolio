import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Aboutme = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1440px] mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 flex text-center items-center justify-center">
        <div className="flex flex-col items-center text-center jus\">
          <h1 className="text-white font-Satoshi font-bold  text-[34px] md:text-[64px] lg:w-[941px]">
            <span className="text-[#AAAAAA]"> On a mission to </span>{" "} <br />
            Build Actionalable, Compelling, and True Brands
          </h1>

          <div className="mt-[50px]">
            <h3 className=" font-Satoshi font-bold text-[#AAAAAA] text-[20px]  md:text-[24px]">Intro</h3>
            <p className=" text-[18px] md:text-[20px] text-white lg:w-[808px]">On my journey to finding my self i have been privilege to Bend a couple of roles like <a href="https://einstein-dev.netlify.app/" className="underline">Front End Development</a> , <a href="https://medium.com/@einsteinnnamah" className="underline" target="_blank">Writing.</a> Even tho i am not a master of these elements it has had a significant impact in me becoming a strong bender in Product design.</p>
          </div>

           <div className="mt-[50px]">
            <h3 className=" font-Satoshi font-bold text-[#AAAAAA] text-[20px]  md:text-[24px]">Early in my career</h3>
            <p className=" text-[18px] md:text-[20px] text-white lg:w-[808px]"> I initial started Front End Development  during the summer holidays when i was still in junior secondary school, this time trying my hands on HTML, CSS still scared of JS, i developed a couple of website discovered they were shitty because i don’t have design knowledge, even tho, this fueled my drive to learn more product design, the point where i said “damn this is what i really want” was when i came in contact with <a href="https://www.linkedin.com/in/victorfatanmi/" className="underline" target="_blank">Victor Fatanmi</a>  and   the work he did with <a href="https://www.fourthcanvas.co/" className="underline" target="_blank">Fourthcanvas.</a> This was what led me to make the decision that i gats learn this and I really wanna get known for this.</p>
          </div>

           <div className="mt-[50px]">
            <h3 className=" font-Satoshi font-bold text-[#AAAAAA] text-[20px]  md:text-[24px]">Present</h3>
            <p className=" text-[18px] md:text-[20px] text-white lg:w-[808px]"> Recently, i still find myself amazed at the way i am able to conceptualize a problem and then transition it into a working product design, i have always imagined these during when i just started product design,
            I’ve worked on a couple products mostly startups, which is really interesting because i had to get into a boat with the intention to push this, tho for we all to survive, during this seasons i was able to learn more about my skills and try harnessing Pure forms of it like Brand strategy.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutme;
