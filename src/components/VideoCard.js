import React from "react";

import YoutubeEmbed from "./YoutubeEmbed";

const VideoCard = ({ embedId, title, description, id }) => {
  return (
    <div class="video-card">
      <div className="video-description">
        <YoutubeEmbed embedId={embedId} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
