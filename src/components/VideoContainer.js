import React, { useEffect, useState } from 'react';
import { POPULAR_VIDEOS } from '../utils/constants';
import VideoCard from './VideoCard';
import useVideos from '../hooks/useVideos';

const VideoContainer = () => {
  const popularVideos = useVideos();

  return (
    <div className='w-full p-2'>
      <div className='flex flex-wrap w-screen'>
      {popularVideos.length > 0 && popularVideos.map((video) => <VideoCard key={video.id} info={video} />)}
      </div>
    </div>
  );
};

export default VideoContainer;
