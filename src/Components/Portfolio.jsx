import React from "react";
import { RightArrow } from "./Icons";
import opensource from '../assets/opensource.png'
import zap from '../assets/zap.png'
import swapgo from '../assets/swapgo.png'
import selldot from '../assets/selldoot.png'
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [hoveredArticle, setHoveredArticle] = React.useState(null);

  const portfolio = [
    {
      id: 1,
      image: zap,
      title: "Zap logistics",
      button: "coming soon",
      link: "https://einsteinnnamah.notion.site/Zap-logistics-Case-study-780b89596db2444a9082adf8d8f7c217?pvs=4",
      target: "_blank",
      brief:
        "ZAP is a mobility and logistics company specializing in connecting businesses and individuals with delivery agents  ",
    },
    {
      id: 2,
      image: swapgo,
      title: "Swapgo",
      link: "/Swapgo",
      target: "_blank",
      brief:
        "Swapgo the money app that gives you absolute control over your exchange rates.  ",
    },
    {
      id: 3,
      image: selldot,
      title: "Selldot",
      link: "https://www.selldot.co/",
      target: "_blank",
      brief:
        "Selldot helps customers to buy and sell used and new item by helping them vet quality used item",
    },
    {
      id: 4,
      image: opensource,
      title: "Open Source Mobile UI kit",
      link: "https://www.figma.com/community/file/1132737808668818244/mobile-ui-kit-open-source",
      brief:
        "Joined a team to create an open-source mobile UI kit, enhancing design consistency. Already, 5k+ users are benefiting from the template. ",
    },
  ];

  return (
    <>
    <div className="max-w-[1440px] hidden font-Satoshi mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 md:grid grid-cols-1 sm:grid-cols-2 gap-8 p-3">
      {portfolio.map((item) => (
        <article
          className="w-full relative rounded-[15px] overflow-hidden"
          key={item.id}
          onMouseEnter={() => setHoveredArticle(item.id)}
          onMouseLeave={() => setHoveredArticle(null)}
        >
          <div className="w-full rounded-[10px] bg-white overflow-hidden">
            <img src={item.image} alt={item.brief} className="w-full h-full object-cover rounded-[15px] transition-transform duration-500 transform hover:scale-105"/>
          </div>
          {hoveredArticle === item.id && (
            <div className="bg-black/70 absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-end gap-[8px] rounded-[15px] transition-opacity duration-500 opacity-0 hover:opacity-100">
             <Link to={item.link} > <p className="px-[32px]  w-full underline-offset-2 hover:underline text-left text-white text-[24px] cursor-pointer">
                {item.title}
              </p> </Link>
              <p className="px-[32px] w-[350px] pb-[32px] text-white">{item.brief}</p>
            </div>
          )}
        </article>
      ))}
    </div>
    <div className="max-w-[1440px] md:hidden font-Satoshi mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 grid grid-cols-1 gap-8 p-3">
      {portfolio.map((item) => (
          <div className=" flex flex-col gap-y-[16px]">
            <img src={item.image} alt={item.brief} className=""/>
            <div className="flex justify-between items-center">
              <div>
              <h2 className="text-white font-bold">{item.title}</h2>
              <p className="text-[14px] text-white w-[250px]">{item.brief}</p>
              </div>
           
           <Link to={item.link} > <button className="text-black bg-white px-[10px] cursor-pointer py-[5px] rounded-[10px]">Open</button></Link>
            </div>
          
          </div>
      ))}
    </div>
    </>
    
  );
};

export default Portfolio;
