/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { BehanceIcon, GithubICon, InstagramIcon, LeftArrowCircle, LinkedinIcon, MediumIcon, RedLine, RightArrowCircle, RightArrowCurve, XIcon } from "../Components/Icons";
import Inprogress from "../Components/Inprogress";
import pics from "../assets/einstein.png";
import Works from "../Components/Works";
import Events from "../Components/Events";
import Portfolio from "../Components/Portfolio";

const Home = () => {
  
  return (
    <>
      <Inprogress />
      <Header />
      <section className="max-w-[1240px] mx-auto grid md:grid-cols-3 grid-cols-1 p-4 gap-3">
        <div className="w-full flex-col items-start justify-center">
          <div className="w-full mx-auto rounded-xl">
            <img src={pics} alt="This is an Image of Einstein Nnamah"  className="w-full rounded-xl"/>
          </div>
          <div className="w-full py-3">
            <h1 className="text-white font-Nunito text-3xl font-bold flex-col relative py-3">I'm Einstein <div className="absolute left-12 top-12"><RedLine/></div></h1>
            <p className="text-white  text-base font-Nunito">A product designer and product strategist (i craft long-term product visions and strategies)</p>
          </div>
          
          <p className="w-full text-left text-sm flex items-center justify-start py-2 gap-3 text-white"><RightArrowCurve /> View my cv 👨‍💼 </p>
        </div>
        <div className="w-full md:col-span-2 flex-col items-start justify-center border border-red-600 h-[450px]">
        </div>
      </section>
      <Portfolio />
      <Works />
      {/* <Events/> */}
    </>
  );
};

export default Home;
