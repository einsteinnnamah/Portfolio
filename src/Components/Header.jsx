import {HiOutlineMenu} from 'react-icons/hi'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const navItems = [
    {
      link: "/",
      text: "Works"
    },
    {
      link: "/Articles",
      text: "Articles"
    },
    {
      link: "/Aboutme",
      text: "About me"
    },
    {
      link: "/dev",
      text: "Dev"
    }
  ]
  return (
    <>
      {/*Desktop */}
      <div className="xl:w-[1440px] px-[24px] xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto ">
        <div className="flex justify-between font-Nunito h-[108px] items-center">
          <h3 className="text-[32px] font-semibold">
            <Link to="/" className="flex text-[24px] md:hidden">Einstein</Link>
            <Link to="/" className="hidden md:flex">einsteinnnamah</Link>
          </h3>
          <div className="hidden md:flex items-center gap-[32px]">
          {
            navItems.map((items, index) => 
                <Link to={items.link} key={index} className="lg:text-[20px] font-medium text-[#808080] hover:text-[#1e1e1e] cursor-pointer ease-out delay-100 duration-75">
              {items.text}
              </Link>
            )
          }
            <button className="bg-[#1e1e1e] text-white px-5 py-2 lg:text-[20px] rounded-[5px]">
           < a target="_blank" href="mailto: einsteinnnamah@gmail.com" >  Contact me </a> 
            </button>
          </div>
          <span className=" md:hidden flex items-center gap-[10px]">
              <button className='bg-[#1e1e1e] md:hidden text-white px-5 py-2 text-[16px] rounded-[5px]'>Contact me</button>
              <HiOutlineMenu onClick={() =>setShowNav(!showNav)}
            className="flex md:hidden w-[32px] h-[32px]"
          />
            </span>
        </div>
      </div>
      {/*Mobile */}
{
  showNav ? 

      <span className='md:hidden absolute right-0 h-[310px] border-[#808080] flex items-center rounded-[5px] justify-center border-[1px] bg-white '>
        <li className='flex items-center flex-col gap-y-10  px-20'>
        {
            navItems.map((items, index) => 
                <Link to={items.link} key={index} className="text-[24px] font-regular text-[#1e1e1e]">
              {items.text}
              </Link>
            )
          }
        </li>
      </span>
      : null
      }

    </>
  );
};

export default Header;
