import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const VideoId = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe
          title="Youtube Video Player"
          src={VideoId}
          frameBorder="0"
        ></iframe>
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};
export default VideoDetails;
