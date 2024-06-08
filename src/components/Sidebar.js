import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isVisible = useSelector((store) => store.menu.sideBarVisibility);

  if (!isVisible) return null;
  return (
    <div className="shadow-2xl h-screen w-48">
      <ul className="">
        <li className="cursor-pointer w-full p-2 flex justify-between items-center hover:bg-slate-200">
          <div className="w-1/6 mx-2">
            <img
              className="h-6 rounded-full"
              alt="home"
              src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building.png"
            />
          </div>
          <div className="w-5/6 ml-3">Home</div>
        </li>
        <li className="cursor-pointer w-full p-2 flex justify-between items-center hover:bg-slate-200">
          <div className="w-1/6 mx-2">
            <img
              className="h-6 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/030/348/222/non_2x/modern-video-play-button-icon-png.png"
              alt="shorts"
            />
          </div>
          <div className="w-5/6 ml-3">Shorts</div>
        </li>
        <li className="cursor-pointer w-full p-2 flex justify-between items-center hover:bg-slate-200">
          <div className="w-1/6 mx-2">
            <img
              className="h-5 w-6"
              src="https://w7.pngwing.com/pngs/896/332/png-transparent-media-player-illustration-youtube-computer-icons-advertising-logo-subscribe-youtube-button-thumbnail.png"
              alt="sub"
            />
          </div>
          <div className="w-5/6 ml-3">Subscriptions</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
