import React from "react";
import BlogCard from "./components/BlogCard";

function Blog() {
  return (
    <main>
      <section className="blog showcase">
        <div className="container">
          <h1>Blog</h1>
          <h2>
            Are you looking for additional resourse and eager to learn high
            school Algebra? <br /> Browse through the Blog Posts
          </h2>
        </div>
      </section>
      <section className="blog-content">
        <div className="container">
          <BlogCard
            title="ONLINE MATH TUTORIALS
          HOW TO NAME DIFFERENT TYPES OF ANGLES - ONLINE MATH TUTORIALS"
            imagesrc="https://mathswithmrsa.com/wp-content/uploads/2021/02/NAME-DIFFERENT-TYPES-OF-ANGLES-1024x576.jpg"
          />
          <BlogCard
            title="HOW TO CLASSIFY TRIANGLES BY SIDES - ONLINE MATH TUTORIALS"
            imagesrc="https://mathswithmrsa.com/wp-content/uploads/2021/02/CLASSIFY-TRIANGLES-BY-SIDES-1024x576.jpg"
          />
          <BlogCard
            title="HOW TO CLASSIFY TRIANGLES BY ANGLES - ONLINE MATH TUTORIALS"
            imagesrc="https://mathswithmrsa.com/wp-content/uploads/2021/02/HOW-TO-CLASSIFY-TRIANGLES-BY-ANGLES-1024x576.jpg"
          />
        </div>
      </section>
    </main>
  );
}

export default Blog;
