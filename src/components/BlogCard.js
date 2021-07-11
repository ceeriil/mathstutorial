import React from "react";

const BlogCard = ({ imagesrc, title, description, id }) => {
  return (
    <div class="blog-card">
      <div className="blog-description">
        <img src={imagesrc} alt="blogcover" />
        <div>
          <h3>{title}</h3>
          <button className="btn-primary">Read</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
