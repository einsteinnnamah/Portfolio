import React from "react";
import { LeftArrowCircle, RightArrow, RightArrowCircle } from "./Icons";

const Works = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const articlesPerPage = 2;
  const color = ["#F9CECA", "#F7D3B2"];

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

  // const loremIpsum = "Lorem ipsum dolit amet consectetur. Id sit lectus quis lobortis id. Venenatis donec vestibulum platea duis. Purus integer sed dolor diam nunc ornare proin euismod sed. Risus egestas ac vulputate nulla adipiscing magna vulputate neque.";

  return (
    <div className="max-w-[1240px] mx-auto p-3">
      <header className="flex items-center justify-between w-full text-white py-3 text-xl">
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
            <div
              style={{
                backgroundColor:
                  color[Math.floor(Math.random() * color.length)],
              }}
              className="w-full rounded-xl h-[300px] flex items-center justify-center"
            >
              <p className="text-black text-5xl hover:underline w-full text-left p-2 transition-all duration-500 cursor-pointer">
                {item.title}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Works;
