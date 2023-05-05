
const Header = () => {
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
            <p className="lg::text-[20px] font-medium text-[#808080] hover:text-[#1e1e1e] cursor-pointer ease-out delay-100 duration-75">
              Works
            </p>
            <p className="lg:text-[20px] font-medium text-[#808080] hover:text-[#1e1e1e] cursor-pointer ease-out delay-100 duration-75">
              Articles
            </p>
            <p className="lg:text-[20px] font-medium text-[#808080] hover:text-[#1e1e1e] cursor-pointer ease-out delay-100 duration-75">
              About me
            </p>
            <button className="bg-[#1e1e1e] text-white px-5 py-2 lg:text-[20px] rounded-[5px]">
           < a target="_blank" href="https://einsteinnnamah@gmail.com" >  Contact me </a> 
            </button>
          </div>
          <span className="bg-[#1e1e1e] md:hidden text-white px-5 py-2 text-[16px] rounded-[5px]">
              Contact me
            </span>
        </div>
      </div>
      {/*Mobile */}
      {/* <div>
        <div className="flex items-center gap-[16px]">
          <button className="bg-[#1e1e1e] flex md:hidden text-white px-5 py-2 rounded-[5px]">
            Contact me
          </button>
          <HiOutlineMenu
            onClick={() => closeNav(!openNav)}
            className="flex md:hidden w-[32px] h-[32px]"
          />
        </div>
        <div className="bg-white text-[24px] flex flex-col items-center justify-center top-0 absolute gap-[32px] h-screen w-screen md:hidden">
          <HiOutlineMenu
            onClick={() => closeNav(!openNav)}
            className="flex md:hidden w-[32px] h-[32px]"
          />
          <p>Works</p>
          <p>Articles</p>
          <p>About me</p>
        </div>
      </div> */}
    </>
  );
};

export default Header;
