import React, { useState, useEffect, useRef } from "react";
import { baseUrl } from "../../constants/constants";

const VideoPlayer = ({ videoUrl }) => {
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);
  const videoPlayerRef = useRef();
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      videoPlayerRef.current.controlsList.value = "nodownload";
      videoPlayerRef.current.oncontextmenu = (e) => e.preventDefault();
    }, 50);

    return () => {
      clearInterval(interval.current);
    };
  }, [videoBlobUrl]);

  //   useEffect(() => {
  //     document.getElementById("video").oncontextmenu = (e) => {
  //       e.preventDefault();
  //     };
  //   }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(`${baseUrl}${videoUrl}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5rb2RlciIsImlhdCI6MTY3NTIzMDE2MX0.9pgi47GiTZ_vpcG3zAryTjvxWjjsUGUlSd2Tq9QEeMM",
        },
      });
      const blob = await response.blob();
      setVideoBlobUrl(URL.createObjectURL(blob));
    };

    fetchVideo();

    return () => {
      URL.revokeObjectURL(videoBlobUrl);
    };
  }, [videoUrl]);

  return (
    <video
      ref={videoPlayerRef}
      controls
      id="video"
      src={videoBlobUrl}
      controlsList="nodownload"
    />
  );
};

export default VideoPlayer;
