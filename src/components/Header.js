import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../store/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggle())
  }

  return (
    <div className="shadow-lg h-16 flex items-center">
      <div className="flex items-center mx-4">
        <img
          className="h-10 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
          onClick={handleSidebar}
        />
        <img
          className="h-5 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
