import React, { useRef } from "react";
import Button from "./Button";
import Left from "../img/left.png";

const ButtonList = () => {
  const scrollableListRef = useRef(null);

  const scrollLeft = () => {
    scrollableListRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollableListRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const buttonList = [
    "All",
    "Gaming",
    "Valorant",
    "Football",
    "Sidemen",
    "Movies",
    "Songs",
    "React",
    "JavaScript",
    "Live",
    "Trailers",
    "Fitness",
    "Travel",
    "Cooking",
    "Technology",
    "Comedy",
    "News",
    "Education",
    "Art",
    "Podcasts",
    "DIY",
    "Science",
    "Nature",
    "History",
    "Fashion",
    "Photography",
    "Sports",
    "Music",
    "Vlogs",
    "Documentaries",
    "Animation",
  ];

  return (
    <div className="flex w-11/12 h-16 items-center mx-auto it">
      <button onClick={scrollLeft} className="text-3xl align-middle">
        <img src={Left} alt="left" className="h-7 w-14 rounded-full" />
      </button>
      <div ref={scrollableListRef} className="flex overflow-x-hidden mx-3">
        {buttonList.map((button,idx) => (
          <Button key={idx} name={button} />
        ))}
      </div>
      <button onClick={scrollRight} className="text-3xl ">
        <img
          src={Left}
          alt="left"
          className="h-7 w-14 transform scale-x-[-1] rounded-full"
        />
      </button>
    </div>
  );
};

export default ButtonList;
