import React from "react";
import Header from "../Components/Header";
import pics2 from "../assets/pics2.png";
import Inprogress from "../Components/Inprogress";
const Aboutme = () => {
  return (
    <>
    <Inprogress />
      <Header />
      <div className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
        <div className="flex mt-[65px] flex-col items-center justify-center">
          <h3 className="font-Gambetta font-semibold text-[32px]">
            More about me
          </h3>
          <p className="font-Nunito mt-[16px] text-[24px] text-center lg:w-[600px]">
            I am Einstein — a digital product designer based in Lagos, Nigeria,
            with over 2 years of experience. My primary focus is on utilizing design
            to create positive impact.
          </p>
          <div className="flex flex-col gap-[20px] mt-[32px] md:flex-row">
            <img className="md:w-[300px] lg:w-auto" src={pics2} />
            <div className="flex flex-col gap-y-[32px]">
              <h3 className="font-Gambetta font-semibold text-[32px]">
                -Experiences
              </h3>
              <div className="font-Nunito ">
                <h5 className="text-[20px]">Zap Logistics</h5>
                <p className="text-[18px]">Lead Product Designer</p>
                <p className="text-[gray]">Mar 2022 - Current</p>
              </div>
              <div className="font-Nunito ">
                <h5 className="text-[20px]">SwapGo</h5>
                <p className="text-[18px]"> Product Designer</p>
                <p className="text-[gray]">Mar 2023 - April 2023</p>
              </div>
              <div className="font-Nunito ">
                <h5 className="text-[20px]">Revetpay 'FAILED'</h5>
                <p className="text-[18px]"> Co-founder / Product Lead</p>
                <p className="text-[gray]">Mar 2022 - Mar 2023</p>
              </div>
              <div className="font-Nunito ">
                <h5 className="text-[20px]">Youbloom</h5>
                <p className="text-[18px]"> UX Design Intern</p>
                <p className="text-[gray]">Mar 2023 - Aug 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
