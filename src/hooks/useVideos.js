import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS } from "../utils/constants";

const useVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch(POPULAR_VIDEOS);
      if (!data.ok) {
        throw new Error("Failed to fetch videos");
      }
      const json = await data.json();
      setPopularVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return popularVideos;
};

export default useVideos;
