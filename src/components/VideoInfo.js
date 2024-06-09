import React, { useState } from "react";

const VideoInfo = ({ info, channel }) => {
  if (info && channel) {
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;
    const { viewCount } = statistics;
    const logo = channel?.items[0]?.snippet?.thumbnails?.high?.url;
    const views = channel?.items[0]?.statistics?.viewCount

    return (
      <div>
        <span className="font-bold text-xl">{title}</span>
        <div className="flex items-center">
          <img src={logo} alt={title} className="h-10 mr-2 my-2 rounded-full" />
          <div className="flex flex-col text-xs">
            <div className="">{channelTitle}</div>
            <div>{views}</div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default VideoInfo;
