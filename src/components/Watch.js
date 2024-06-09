import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../store/menuSlice";
import { useSearchParams } from "react-router-dom";
import { getChannel, getVideo } from "../utils/constants";
import VideoInfo from "./VideoInfo";
import VideoCard from "./VideoCard";
import useVideos from "../hooks/useVideos";

const Watch = () => {
  const dispatch = useDispatch();
  const [id] = useSearchParams();
  const [vidInfo, setVidInfo] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
  const videoList = useVideos();

  const fetchVideo = async (id) => {
    try {
      let url = getVideo(id);
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error("failed to fetch video data");
      }
      let json = await data.json();
      setVidInfo(json.items[0]);
      const channelurl = getChannel(json?.items[0]?.snippet?.channelId);
      const channelData = await fetch(channelurl);
      if (!channelData.ok) {
        throw new Error("failed to fetch channel data");
      }
      const channelJson = await channelData.json();
      setChannelInfo(channelJson);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    dispatch(close());
    fetchVideo(id.get("v"));
  }, []);

  return (
    <div className="w-screen h-screen flex">
      <div>
        <div className="p-3 m-3">
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${id.get(
              "v"
            )}?si=-rJ2TDCRO95UIJZV`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-3 m-3 ">
          <VideoInfo info={vidInfo} channel={channelInfo} />
        </div>
      </div>
    </div>
  );
};

export default Watch;
