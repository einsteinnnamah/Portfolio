import React from "react";
import { LeftArrowCircle, RightArrow, RightArrowCircle } from "./Icons";

const Works = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const articlesPerPage = 2;
  const color = ["#F9CECA", "#F7D3B2", "#C1CEE4"];

  const articles = [
    {
      id: 1,
      image: "",
      title: "I tried a leadership position for the first time",
      link: "https://medium.com/@einsteinnnamah/i-tried-a-leadership-position-for-the-first-time-cd76415fd839",
      date: "Jan 2"
    },
    {
      id: 2,
      image: "",
      title: "Those thoughts! Write it",
      link: "https://medium.com/@einsteinnnamah/those-thoughts-write-it-5ebab4265e8a"
    },
    {
      id: 3,
      image: "",
      title: "Companies can be missing out on a market, simply because they’re not designing for it",
      link: "https://medium.com/design-bootcamp/companies-can-be-missing-out-on-a-market-simply-because-theyre-not-designing-for-it-1815d770e7d9"
    },
    {
      id: 4,
      image: "",
      title: "Designing for Trust (Airbnb)",
      link: "https://medium.com/@einsteinnnamah/designing-for-trust-2d127f404a2c"
    },
    {
      id: 5,
      image: "",
      title: "Why Companies Should Take Brand Credibility Seriously",
      link: "https://medium.com/design-bootcamp/why-companies-should-take-brand-credibility-seriously-14aeb743c995"
    },
    {
      id: 6,
      image: "",
      title: "What is Brand Entropy ?",
      link: "https://medium.com/@einsteinnnamah/what-is-brand-entropy-195fe589d373"
    },
  ];
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * articlesPerPage;
  const visibleArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // const loremIpsum = "Lorem ipsum dolit amet consectetur. Id sit lectus quis lobortis id. Venenatis donec vestibulum platea duis. Purus integer sed dolor diam nunc ornare proin euismod sed. Risus egestas ac vulputate nulla adipiscing magna vulputate neque.";

  return (
    <div className="max-w-[1440px] mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5">
      <header className="flex items-center justify-between w-full font-Satoshi font-medium text-white py-3 text-[22px] md:text-[24px] lg:text-[30px]">
        Some of my piece ✍️
        <div className=" items-center justify-end gap-3 flex">
          <div className="cursor-pointer " onClick={handlePrevPage}>
            <LeftArrowCircle/>
          </div>
          <div  className="cursor-pointer" onClick={handleNextPage}>
            <RightArrowCircle />
          </div>
        </div>
      </header>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleArticles.map((item, i) => (
          <article key={item.id} className="">
            <div
              style={{
                backgroundColor:
                  color[Math.floor(Math.random() * color.length)],
              }}
              className="w-full rounded-xl h-[300px] flex flex-col items-center cursor-pointer justify-center"
            >
              <a href={item.link} target="_blank" className="text-black text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] px-[24px] md:px-[53px] md:py-[67px] font-bold font-Satoshi underline-offset-2  hover:underline  p-2 transition-all duration-500 cursor-pointer">
                {item.title}
              </a>
              
              
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Works;
