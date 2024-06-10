import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../store/menuSlice";
import { Link } from "react-router-dom";
import { SUGGESTION_API } from "../utils/constants";

const Header = () => {
  //dispatch action to toggle sidebar
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggle());
  };

  //initializing state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionVisibility, setSuggestionVisibility] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      const url = SUGGESTION_API + searchQuery;
      fetchSuggestions(url);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSuggestions = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  return (
    <div className="shadow-lg h-16 flex items-center w-full justify-between">
      <div className="flex items-center mx-4">
        <img
          className="h-10 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
          onClick={handleSidebar}
        />
        <Link to="/">
          <img
            className="h-5 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex relative">
        <div className="flex">
          <input
            type="text"
            className="w-[440px] p-2 pl-5 focus:outline-none border-2 border-gray-300 rounded-l-full text-sm"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSuggestionVisibility(true)}
            onBlur={() => setSuggestionVisibility(false)}
          />
          <div className="border-2 rounded-r-full w-12 flex justify-center items-center bg-gray-200 border-gray-300 cursor-pointer">
            <img
              src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"
              alt="search"
              className="h-4"
            />
          </div>
        </div>
        {suggestionVisibility && suggestions.length > 0 ? (
          <div className="absolute top-10 bg-white w-[440px] border-2 border-gray-200 shadow-xl rounded-xl p-2">
            <ul>
              {suggestions.map((suggesion) => (
                <li
                  key={suggesion}
                  className="pl-3 my-2 py-1 hover:bg-slate-200"
                >
                  {suggesion}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>User</div>
    </div>
  );
};

export default Header;
