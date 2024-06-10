import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { open } from "../store/menuSlice";

const Main = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(open())
  },[])

  return (
    <div className="flex flex-col w-10/12">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Main;
