import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const RenderedVideoList = props.videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{RenderedVideoList}</div>;
};

export default VideoList;
