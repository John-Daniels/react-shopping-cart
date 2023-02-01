import VideoPlayer from "../../components/Video/Video";
import { useParams, useSearchParams } from "react-router-dom";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const video = searchParams.get("video");

  if (!video) return <>No video found!</>;

  return (
    <div>
      <VideoPlayer videoUrl={`/videos/${video}`} />
    </div>
  );
};

export default VideoPage;
