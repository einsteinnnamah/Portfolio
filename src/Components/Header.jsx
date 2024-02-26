import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-[1440px] mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 flex items-center justify-between"
    >
      <div className="font-Satoshi font-bold justify-start text-[22px] md:text-[28px] text-white">
      <Link to="/">  Einstein.N </Link>
      </div>
      <a href="mailto:einsteinnnamah@gmail.com">
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        className="bg-white text-black hover:bg-[#FF0000] hover:text-[white] rounded-[10px] ease-in duration-150 font-Satoshi text-[16px] md:text-[18px] font-semibold cursor-pointer inline-block p-[20px] py-2">
          Buzz me
        </motion.button>
      </a>
    </motion.div>
  );
};

export default Header;
