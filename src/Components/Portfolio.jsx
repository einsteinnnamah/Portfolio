import React from "react";
import { RightArrow } from "./Icons";
import typo from '../assets/declutter.png'

const Portfolio = () => {
  const [hoveredArticle, setHoveredArticle] = React.useState(null);

  const portfolio = [
    {
      id: 1,
      image: typo,
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 2,
      image: typo,
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 3,
      image: typo,
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 4,
      image: typo,
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
  ];

  return (
    <>
    <div className="max-w-[1440px] hidden font-Satoshi  mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 md:grid grid-cols-1 sm:grid-cols-2 gap-8 p-3">
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
            <div className="bg-black/70 absolute top-0 left-0 bottom-0 right-0 flex items-end justify-start rounded-[15px] transition-opacity duration-500 opacity-0 hover:opacity-100">
              <p className="p-8 w-full underline-offset-2 hover:underline text-left text-white text-[24px] cursor-pointer">
                {item.title}
              </p>
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
            <h2 className="text-white font-medium">{item.title}</h2>
            <button className="text-black bg-white px-[10px] cursor-pointer py-[5px] rounded-[10px]">Open</button>
            </div>
          
          </div>
      ))}
    </div>
    </>
    
  );
};

export default Portfolio;
