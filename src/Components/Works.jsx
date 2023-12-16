import React from "react";
import { LeftArrowCircle, RightArrow, RightArrowCircle } from "./Icons";

const Works = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const articlesPerPage = 2;

  const articles = [
    {
      id: 1,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 2,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 3,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 4,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 5,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 6,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 7,
      image: "",
      title: "I tried a leadership position for the first time",
    },
    {
      id: 8,
      image: "",
      title: "I tried a leadership position for the first time",
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

  const loremIpsum = "Lorem ipsum dolor sit amet consectetur. Id sit lectus quis lobortis id. Venenatis donec vestibulum platea duis. Purus integer sed dolor diam nunc ornare proin euismod sed. Risus egestas ac vulputate nulla adipiscing magna vulputate neque.";


  return (
    <div className="w-full p-3">
      <header className="flex items-center justify-between w-full">
        Some of my piece ✍️
        <div className=" items-center justify-end gap-3 flex">
          <div onClick={handlePrevPage}>
            <LeftArrowCircle />
          </div>
          <div onClick={handleNextPage}>
            <RightArrowCircle />
          </div>
        </div>
      </header>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleArticles.map((item, i) => (
          <article key={item.id} className="">
            <div className="w-full bg-slate-300 rounded-xl h-[300px]"></div>
            <p>{item.id}</p>
            <p className="text-black text-bases w-full text-left py-3">{item.title}</p>
            <p className="w-full flex items-center justify-start gap-3 text-sm text-[#808080]">Read more <RightArrow /></p>
          </article>
        ))}
      </div>

      <p className="w-full text-left text-xl py-8">
      <RandomColorText text={loremIpsum} />

      <p className="w-full text-sm text-[#808080] flex items-center justify-start gap-2">My story <RightArrow/> <span className="text-black text-sm">Coming soon</span></p>
      </p>
    </div>
  );
};

export default Works;

const RandomColorText = ({ text }) => {
    const words = text.split(' ');
  
    const coloredText = words.map((word, index) => {
      const colorClass = getRandomColor() === 'black' ? 'text-black' : 'text-[#808080]';
      return <span key={index} className={colorClass}>{word} </span>;
    });
  
    return <div className="w-full text-left text-xl">{coloredText}</div>;
  };


  const getRandomColor = () => {
    const colors = ['#808080', 'black']; // Add more colors if needed
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };