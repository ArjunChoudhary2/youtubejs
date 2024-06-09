import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  if(info){
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;
    const { viewCount } = statistics;
  
    return (
      <div className="w-80 mx-2">
        <Link to={"watch/?v=" + info.id}>
          <img src={thumbnails.medium.url} alt={title} className="rounded-lg" />
          <div className="font-bold text-sm">{title}</div>
          <div className="text-sm">{channelTitle}</div>
          <div className="text-sm">{viewCount} views</div>
        </Link>
      </div>
    );
  }
  return <div></div>
 
};

export default VideoCard;
