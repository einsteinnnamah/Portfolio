/* eslint-disable react/no-unescaped-entities */
import Header from "../Components/Header";
import Inprogress from "../Components/Inprogress";
import pics from "../assets/pics.png";
import OngoingFooter from "../Components/OngoingFooter";
import Notion from "../assets/Notion.png";
import Behance from "../assets/Behance.png";
import jamb from "../assets/jamb.png";
import { Link } from "react-router-dom";
import googlemeet from "../assets/Googlemeet/googlemeet.png";
import mobile from "../assets/mobile.png";
import abc from "../assets/abc.png";
import arrow from "../assets/arrow.png";

const Home = () => {
  return (
    <>
      <Inprogress />
      <Header />
      <div className="xl:w-[1440px] px-[24px]  xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto">
        <div className="mt-[90px]  md:flex md:justify-between">
          <div>
            <h1 className=" font-Gambetta leading-[108%] font-semibold text-[50px] lg:text-[54px] xl:text-[96px]">
              Halo, <br /> I'm Einstein
            </h1>
            <p className="font-Nunito text-[20px] xl:text-[32px] md:w-[390px] xl:w-[496px] font-medium">
              A product designer living in Nigeria, focused on creating long
              lasting experiences :)
            </p>
            <button className="px-5 font-Nunito mt-4 cursor-pointer rounded-[5px] py-2 text-white text-[18px] md:text-[20px] bg-[#1e1e1e]">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/15AByVIB8jkfd0Fha8doCYIB-96y0sNjf/view?usp=share_link"
              >
                {" "}
                View Resume{" "}
              </a>
            </button>
          </div>
          <div>
            <img className="md:w-[300px] mt-5 md:mt-0 xl:w-auto" src={pics} />
          </div>
        </div>

        {/* Featured works */}

        <div className="mt-[100px]">
          <h2 className="font-Nunito text-[24px] font-semibold md:text-[38px]">
            <span className="  text-[gray]">Featured</span> Works
          </h2>
          {/* MObile UI kit */}
          <div>
            <img src={mobile} />
            <div>
              <h2 className=" font-Gambetta font-semibold text-[20px] md:text-[24px] lg:text-[38px] ">
                Mobile UI kit
              </h2>

              <p className="w-auto text-[14px] mb-2 text-[gray] lg:text-[24px] md:text-[20px]">
                An open-source Mobile UI kit that helps designers enhance
                consistency, thereby helping users make use of these designed
                apps easily.
              </p>
              <a
                target="_blank"
                href="https://www.figma.com/community/file/1132737808668818244"
                className=" "
              >
                <button className="bg-[#1e1e1e] text-white text-[18px] w-[120px] md:w-[187px] h-[55px] rounded-[5px] ">
                  {" "}
                  View kit
                </button>
              </a>
            </div>
          </div>
          {/* Edtech UI kit */}

          <div className="flex mt-[80px] md:flex-row gap-[30px] items-center flex-col">
            <div>
              <img src={abc} alt="Edtech style guide" />
            </div>
            <div>
              <h1 className="text-[30px] font-semibold font-Gambetta">
                Edtech style guide
              </h1>
              <p className="text-[20px] lg:w-[420px] font-Nunito text-[gray]">
                This design guide is all about making learning the alphabet
                super fun for little kids{" "}
              </p>
              <Link
               to="/Works/Edtech"
              >
                <button className="bg-[#1e1e1e] text-white text-[18px] w-[120px] md:w-[187px] h-[55px] rounded-[5px] ">
                  {" "}
                  Read casestudy
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row gap-[40px] md:gap-[10px] lg:gap-[100px]">
        <div>
        <img className="md:w-[350px] lg-w-[200%]" src={abc} />
              <div>
                <h2 className=" font-Gambetta font-semibold text-[20px] md:text-[28px] lg:text-[38px] ">
                Edtech style guide
                </h2>
                <Link
                  target="_blank"
                  href="https://www.figma.com/community/file/1132737808668818244"
                  className="flex items-center lg:w-[573px]"
                >
                  <p className=" text-[14px] xl:w-[300px] text-[gray] lg:text-[20px] md:text-[16px]">
                    An open-source Mobile UI kit that helps designers enhance
                    consistency, thereby helping users make use of these designed
                    apps easily.
                  </p>
                  <img className="hidden md:flex md:w-[50px] lg-w-auto" src={arrow} />
                </Link>
              </div>
        </div>
        <div>
        <img className="md:w-[350px] lg-w-auto" src={abc} />
              <div>
                <h2 className=" font-Gambetta font-semibold text-[20px] md:text-[28px] lg:text-[38px] ">
              Google meet
                </h2>
                <Link
                  target="_blank"
                  href="https://www.figma.com/community/file/1132737808668818244"
                  className="flex items-center lg:w-[573px]"
                >
                  <p className=" text-[14px]  lg:w-auto text-[gray] lg:text-[20px] md:text-[16px]">
                    An open-source Mobile UI kit that helps designers enhance
                    consistency, thereby helping users make use of these designed
                    apps easily.
                  </p>
                  <img className="hidden md:flex md:w-[50px] lg-w-auto" src={arrow} />
                </Link>
              </div>
        </div>
            </div> */}

          <div className="md:flex items-center  gap-10">
            <div className="flex  mt-[16px] flex-col md:w-[424px] h-[379px] border-solid border-[1px] rounded-[10px] border-[#808080]  p-10 justify-center items-start ">
              <img src={jamb} />
              <div className="mt-[28px] font-Nunito ">
                <p className="lg:text-[40px] md:text-[32px] text-[28px]">
                  Jamb
                </p>
                <p className="underline text-[20px] cursor-pointer text-[gray] lg:text-[24px] ">
                  <Link to="/Works/Jamb"> Click to view casestudy</Link>
                </p>
              </div>
            </div>
            <div className="flex  mt-[16px] flex-col md:w-[424px] h-[379px] border-solid border-[1px] rounded-[10px] border-[#808080]  p-10 justify-center items-start ">
              <div className="mt-[28px] font-Nunito ">
                <p className="lg:text-[40px] md:text-[32px] text-[28px]">
                  Edtech Style Guide
                </p>
                <p className="underline text-[20px] cursor-pointer text-[gray] lg:text-[24px] ">
                  <Link to="/Works/Edtech"> Click to view casestudy</Link>
                </p>
              </div>
            </div>
            <div className="flex  mt-[16px] flex-col md:w-[424px] h-[379px] border-solid border-[1px] rounded-[10px] border-[#808080]  p-10 justify-center items-start ">
              <img className="w-[90px] md:w-auto" src={googlemeet} />
              <div className="mt-[28px] font-Nunito ">
                <p className="lg:text-[40px] md:text-[32px] text-[28px]">
                  Googlemeet
                </p>
                <p className="underline text-[20px] cursor-pointer text-[gray] lg:text-[24px] ">
                  <Link to="/Works/Googlemeet"> Click to view casestudy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Previous portfolio */}
        <div className="mt-[120px] flex items-center flex-col mb-10">
          <h2 className="text-[32px] mb-[20px]">Previous Portfolios</h2>
          <div className="flex flex-col items-center lg:flex-row gap-10">
            <div className="flex flex-col md:w-[424px] h-[379px] border-solid border-[1px] rounded-[10px] border-[#808080]  p-10 justify-center items-start ">
              <img className="w-[90px] md:w-auto" src={Notion} />
              <div className="mt-[28px] font-Nunito ">
                <p className="lg:text-[40px] md:text-[32px] text-[28px]">
                  Notion
                </p>
                <p className="underline text-[20px] cursor-pointer text-[gray] lg:text-[24px] ">
                  <a> Click to view notion portfolio</a>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:w-[424px] h-[379px] border-solid border-[1px] rounded-[10px] border-[#808080] p-10 justify-center items-start ">
              <img className="w-[90px] md:w-auto" src={Behance} />
              <div className="mt-[28px] font-Nunito ">
                <p className="lg:text-[40px] md:text-[32px] text-[28px]">
                  Behance
                </p>
                <p className="underline text-[20px] cursor-pointer text-[gray] lg:text-[24px] ">
                  <a target="_blank" href="mailto: einsteinnnamah@gmail.com">
                    {" "}
                    Click to view behance portfolio{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <OngoingFooter />
    </>
  );
};

export default Home;
