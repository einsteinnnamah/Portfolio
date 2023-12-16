import React from "react";
import { RightArrow } from "./Icons";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 2,
      image: "",
      title: "Declutter",
      brief: "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. "
    },
    {
      id: 3,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 4,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 5,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 6,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 7,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
    {
      id: 8,
      image: "",
      title: "Declutter",
      brief:
        "EngageInbox is a sophisticated email marketing web application designed to empower businesses to create, manage, and optimize their email marketing campaigns with ease. ",
    },
  ];
  return (
    <div className="w-full">
      {portfolio.map((item, index) => (
        <article className="w-full " key={item + index}>
          <div className="w-full h-[350px] bg-slate-300 rounded-2xl">

          </div>
          <p className="text-base w-full text-left">{item.title}</p>
          <p className="text-sm text-[#808080] text-left w-full">{item.brief}</p>
          <p className="w-full flex items-center justify-start gap-3 text-sm text-[#808080]">Read more <RightArrow /></p>
        </article>

      ))}
    </div>
  );
};

export default Portfolio;
