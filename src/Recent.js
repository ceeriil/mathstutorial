import React from "react";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <section className="recent-videos">
      <h1>My Recent Videos</h1>
      <div className="container grid-row">
        <div className="video-description">
          <video width="100%" height="auto" controls>
            <source src="https://youtu.be/l6QMJniQWxQ" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p>
            If you are looking for help on How to do a translation in
            transformation in geometry, you are exactly at the place you need to
            be. In this video, I will be teaching you guys on how...
          </p>
        </div>
        <div className="video-description">
          <video width="100%" height="auto" controls>
            <source src="https://youtu.be/l6QMJniQWxQ" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p>
            If you are looking for help on how to do a 90 degrees rotation
            clockwise about the origin, you are exactly at the place you need to
            be. In this video, I will be teaching you guys on how...
          </p>
        </div>
        <div className="video-description">
          <video width="100%" height="auto" controls>
            <source src="https://youtu.be/l6QMJniQWxQ" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <p>
            If you are looking for help on how to rotate an image 90 degrees
            counterclockwise , you are exactly at the place you need to be. In
            this video, I will be teaching you guys on how...
          </p>
        </div>
      </div>
      <div className='container'>
      <div className="button-container ">
        <button className="btn-primary">
          <Link to="#">Load More</Link>
        </button>
        <button className="btn-secondary">
          <Link to="#">Subscribe</Link>
        </button>
      </div>
      </div>
      
    </section>
  );
};

export default Recent;
