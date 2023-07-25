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
import form from "../assets/form.png";
import gmail from "../assets/Gmail.png";
import app from "../assets/APP.png";
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
          <h2 className="font-Nunito text-[24px] md:text-[32px]">
            <span className="  text-[gray]">Featured</span> Works
          </h2>
          {/* MObile UI kit */}
          <div>
            <img src={mobile} />
            <div>
              <h2 className=" font-Gambetta font-semibold text-[20px] md:text-[24px] lg:text-[30px] ">
                Mobile UI kit
              </h2>

              <p className="w-auto text-[14px] mb-2 text-[gray] lg:text-[22px] md:text-[20px]">
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
          {/* Main works items here */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Edtech UI kit */}
            <div className="flex mt-[80px] gap-[20px] flex-col">
              <div>
                <img
                  className="lg:w-[440px] md:w-[340px] xl:w-auto"
                  src={abc}
                  alt="Edtech style guide"
                />
              </div>
              <div>
                <h1 className="text-[30px] md:text-[24px] md:w-[340px] lg:w-[440px] lg:text-[28px] xl:w-[570px] font-semibold font-Gambetta">
                  Edtech style guide
                </h1>
                <p className=" text-[16px] md:text-[16px] md:w-[340px] lg:w-[440px] lg:text-[20px] xl:w-[570px] font-Nunito text-[gray]">
                  This ABCD learning style guide enhances engagement through
                  vibrant visuals, interactive elements, and immediate feedback.
                  A valuable resource for creating a fun and effective learning
                  journey.{" "}
                </p>
                <Link to="/Works/Edtech">
                  <button className="bg-[#1e1e1e] mt-[10px] md:mt-[20px] text-white text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] ">
                    Read casestudy
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex mt-[80px] gap-[20px] flex-col">
              <div>
                <img
                  className="lg:w-[440px] md:w-[340px] xl:w-[570px]"
                  src={form}
                  alt="Edtech style guide"
                />
              </div>
              <div>
                <h1 className="text-[30px] md:text-[24px] md:w-[340px] lg:w-[440px] lg:text-[28px] xl:w-[570px] font-semibold font-Gambetta">
                  Toystores
                </h1>
                <p className=" text-[16px] md:text-[16px] md:w-[340px] lg:w-[440px] lg:text-[20px] xl:w-[570px] font-Nunito text-[gray]">
                  Kidtoys Store is an online retail store that caters to
                  children and parents, offering a wide range of high-quality
                  and thoughtfully curated toys.{" "}
                </p>

                <div>

<button
                  disabled
                  className="bg-[#1e1e1e] opacity-50 mt-[10px] md:mt-[20px] text-white text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] "
                >
                  in development
                </button>

<a
target="_blank" 
href="https://www.figma.com/proto/6CCiv0daVHi5tBnh7h7bL3/DESIGN-CLAN-CHALLENGE?page-id=82%3A9&type=design&node-id=90-12&viewport=793%2C328%2C0.35&t=EINUcOW6r0Eb15N1-1&scaling=min-zoom&starting-point-node-id=90%3A12&mode=design" >
                <button
                  className="text-[#1e1e1e] mt-[10px] md:mt-[20px]  text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] "
                >
                 View figma prototye ⤴ 
                </button>
                </a>
</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Googlemmet UI kit */}
            <div className="flex mt-[80px] gap-[20px] flex-col">
              <div>
                <img
                  className="lg:w-[440px] md:w-[340px] xl:w-auto"
                  src={gmail}
                  alt="Edtech style guide"
                />
              </div>
              <div>
                <h1 className="text-[30px] md:text-[24px] md:w-[340px] lg:w-[440px] lg:text-[28px] xl:w-[570px] font-semibold font-Gambetta">
                  Gmail UI/UX audit
                </h1>
                <p className=" text-[16px] md:text-[16px] md:w-[340px] lg:w-[440px] lg:text-[20px] xl:w-[570px] font-Nunito text-[gray]">
                  This UX audit of Google Meet revealed a notable issue when
                  accepting new participants while screen sharing.
                </p>
                <Link to="/Works/Googlemeet">
                  <button className="bg-[#1e1e1e] mt-[10px] md:mt-[20px] text-white text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] ">
                    Read casestudy
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex mt-[80px] gap-[20px] flex-col">
              <div>
                <img
                  className="lg:w-[440px] md:w-[340px] xl:w-[570px]"
                  src={app}
                  alt="Edtech style guide"
                />
              </div>
              <div>
                <h1 className="text-[30px] md:text-[24px] md:w-[340px] lg:w-[440px] lg:text-[28px] xl:w-[570px] font-semibold font-Gambetta">
                  Shop app
                </h1>
                <p className=" text-[16px] md:text-[16px] md:w-[340px] lg:w-[440px] lg:text-[20px] xl:w-[570px] font-Nunito text-[gray]">
                  This ABCD learning style guide enhances engagement through
                  vibrant visuals, interactive elements, and immediate feedback.
                  A valuable resource for creating a fun and effective learning
                  journey.{" "}
                </p>
<div>

<button
                  disabled
                  className="bg-[#1e1e1e] opacity-50 mt-[10px] md:mt-[20px] text-white text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] "
                >
                  in development
                </button>

< a 
target="_blank"
href="https://www.figma.com/proto/V6MKrFO9zggC01pJ0UHGP0/DESIGN?page-id=0%3A1&type=design&node-id=47-935&viewport=-1618%2C1443%2C0.3&t=HvmYmmvTsFo8dZwh-1&scaling=scale-down&starting-point-node-id=47%3A935&mode=design" >
                <button
                  className="text-[#1e1e1e] mt-[10px] md:mt-[20px]  text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] "
                >
                 View figma file ⤴ 
                </button>
                </a>
</div>
              </div>
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Googlemmet UI kit */}
            <div className="flex mt-[80px] gap-[20px] flex-col">
              <div>
                <img
                  className="lg:w-[440px] md:w-[340px] xl:w-auto"
                  src={gmail}
                  alt="Edtech style guide"
                />
              </div>
              <div>
                <h1 className="text-[30px] md:text-[24px] md:w-[340px] lg:w-[440px] lg:text-[28px] xl:w-[570px] font-semibold font-Gambetta">
                  Techsteroid
                </h1>
                <p className=" text-[16px] md:text-[16px] md:w-[340px] lg:w-[440px] lg:text-[20px] xl:w-[570px] font-Nunito text-[gray]">
                  This UX audit of Google Meet revealed a notable issue when
                  accepting new participants while screen sharing.
                </p>
                <a href="">
                  <button className="bg-[#1e1e1e] mt-[10px] md:mt-[20px] text-white text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] ">
                    View figma file
                  </button>
                </a>
              </div>
            </div>

            <div className="flex mt-[80px] gap-[20px] flex-col">
              <div>
                <img
                  className="lg:w-[440px] md:w-[340px] xl:w-[570px]"
                  src={app}
                  alt="Edtech style guide"
                />
              </div>
              <div>
                <h1 className="text-[30px] md:text-[24px] md:w-[340px] lg:w-[440px] lg:text-[28px] xl:w-[570px] font-semibold font-Gambetta">
                  Booklyn app
                </h1>
                <p className=" text-[16px] md:text-[16px] md:w-[340px] lg:w-[440px] lg:text-[20px] xl:w-[570px] font-Nunito text-[gray]">
                  This ABCD learning style guide enhances engagement through
                  vibrant visuals, interactive elements, and immediate feedback.
                  A valuable resource for creating a fun and effective learning
                  journey.{" "}
                </p>

                <button
                  disabled
                  className="bg-[#1e1e1e] mt-[10px] md:mt-[20px] text-white text-[18px] w-auto px-[14px] lg:w-auto md:w-[150px] h-[55px] rounded-[5px] "
                >
                  View figma file
                </button>
              </div>
            </div>
          </div>


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
