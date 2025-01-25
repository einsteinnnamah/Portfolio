/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { BehanceIcon, GithubICon, InstagramIcon, LeftArrowCircle, LinkedinIcon, MediumIcon, RedLine, RightArrowCircle, RightArrowCurve, XIcon } from "../Components/Icons";
import Inprogress from "../Components/Inprogress";
import pics from "../assets/einstein.png";
import Works from "../Components/Works";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer"
import Strategy from "../Components/Strategy";

const Home = () => {

  return (
    <>
      <Inprogress />
      <Header />
      <section className="max-w-[1440px] mx-auto flex md:flex-row  flex-col gap-[50px] md:gap-[22px] xl:gap-[53px] md:px-[60px] px-[20px] xl:px-[120px] py-10">
        <div className=" flex-col items-start justify-center">
          <div className="">
            <img src={pics} alt="This is an Image of Einstein Nnamah" className="md:w-[70%] w-full" />
          </div>
          <div className=" py-3">
            <h1 className="text-white font-Satoshi lg:text-[30px] text-[28px] font-bold flex-col relative py-3">I'm Einstein <div className="absolute left-12 top-12"><RedLine /></div></h1>
            <p className="text-white text-[18px] lg:text-[22px] md:w-[280px] lg:w-[320px] xl:w-[369px] font-Satoshi">A product designer and brand strategist (I help shape the view of how people experience you product or service)</p>
          </div>
          <a href="https://docs.google.com/document/d/1zm9fOog3JYLByXpW6kqM0y9ZIn2a3GuP/edit?usp=sharing&ouid=109910990121215357497&rtpof=true&sd=true" target="_blank" className="text-left lg:text-[18px] text-[16px] font-medium flex font-Satoshi items-center justify-start cursor-pointer  py-2 gap-3 text-white"><RightArrowCurve /> <span className=" underline-offset-2 hover:underline"> View my cv</span> 👨‍💼  </a>
        </div>
        <div className="w-full border rounded-[10px] border-red-600 h-[250px] text-center text-white flex flex-col items-center justify-center font-Satoshi font-bold md:h-[300px] lg:h-[450px]">
          Short video coming soon <br />
          But <br />
          <Link to="/Aboutme" className="underline"> Read more about me </Link>
        </div>
      </section>
      <Portfolio />
      <Strategy />
      <Works />
      <Footer />
      {/* <Events/> */}
    </>
  );
};

export default Home;
