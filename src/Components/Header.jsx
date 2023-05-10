import {HiOutlineMenu} from 'react-icons/hi'
import { useState } from 'react';
const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const onClick = () => setShowNav(true)
  const navItems = [
    {
      id: 1,
      text: "Works"
    },
    {
      id: 2,
      text: "Articles"
    },
    {
      id: 3,
      text: "About me"
    }
  ]
  return (
    <>
      {/*Desktop */}
      <div className="xl:w-[1440px] px-[24px] xl:px-[120px] lg:px-[64px] md:px-[32px] m-auto ">
        <div className="flex justify-between font-Nunito h-[108px] items-center">
          <h3 className="text-[32px] font-semibold">
            <span className="flex text-[24px] md:hidden">Einstein</span>
            <span className="hidden md:flex">einsteinnnamah</span>
          </h3>
          <div className="hidden md:flex items-center gap-[32px]">
          {
            navItems.map((items) => 
                <div key={items.id} className="lg:text-[20px] font-medium text-[#808080] hover:text-[#1e1e1e] cursor-pointer ease-out delay-100 duration-75">
              {items.text}
              </div>
            )
          }
            <button className="bg-[#1e1e1e] text-white px-5 py-2 lg:text-[20px] rounded-[5px]">
           < a target="_blank" href="mailto: einsteinnnamah@gmail.com" >  Contact me </a> 
            </button>
          </div>
          <span className=" md:hidden flex items-center gap-[10px]">
              <button className='bg-[#1e1e1e] md:hidden text-white px-5 py-2 text-[16px] rounded-[5px]'>Contact me</button>
              <HiOutlineMenu onClick={onClick}
            className="flex md:hidden w-[32px] h-[32px]"
          />
            </span>

          
            
        </div>
      </div>
      {/*Mobile */}
{
  showNav ? 

      <span className='md:hidden absolute w-screen h-screen bg-white py-20'>
        <li className='flex items-center flex-col gap-y-10 px-20 justify-center'>
        {
            navItems.map((items) => 
                <div key={items.id} className="text-[32px] font-regular text-[#1e1e1e]">
              {items.text}
              </div>
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
