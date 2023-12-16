/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { BehanceIcon, GithubICon, InstagramIcon, LinkedinIcon, MediumIcon, XIcon } from "../Components/Icons";
import Inprogress from "../Components/Inprogress";
import pics from "../assets/pics.png";

const Home = () => {
  const IconData = [
    {
      name: 'Instagram',
      logo: <InstagramIcon />,
      link: '',
    },
    {
      name: 'X(Twitter)',
      logo: <XIcon />,
      link: '',
    },
    {
      name: 'Github',
      logo: <GithubICon />,
      link: '',
    },
    {
      name: 'Medium',
      logo: <MediumIcon />,
      link: '',
    },
    {
      name: 'LinkedIn',
      logo: <LinkedinIcon />,
      link: '',
    },
    {
      name: 'Behance',
      logo: <BehanceIcon />,
      link: '',
    },
  ]
  return (
    <>
      <Inprogress />
      <Header />
      <section className="w-full grid md:grid-cols-3 grid-cols-1 h-[500px] p-4">
        <div className="w-full border flex-col items-start justify-center">
          <div className="w-full mx-auto rounded-xl">
            <img src={pics} alt="This is an Image of Einstein Nnamah"  className="w-full rounded-xl"/>
          </div>
          <div className="w-full py-3">
            <h1 className="text-black font-Nunito text-2xl font-bold">Halo, I am Einstein Nnamah</h1>
            <p className="text-black/60  text-sm font-Nunito">A product designer living in Nigeria, focused on creating long lasting experiences :)</p>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            {
              IconData.map((icon, i) => {
                return (
                  <div className="flex gap-2 items-center justify-center font-semibold px-[18px] py-2 bg-black/30 rounded-[30px]" key={i}>
                    {icon.logo} {icon.name}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="w-full border md:col-span-2 flex-col items-start justify-center">

        </div>
      </section>
    </>
  );
};

export default Home;
