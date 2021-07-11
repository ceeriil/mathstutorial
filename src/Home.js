import React from "react";
import "./App.css";

function Home() {
  return (
    <main>
      <section className="home showcase">
        <div className="content-mobile">
          <h1>Maths Made Easy </h1>
          <h2>by Mr Sa Mathematics Teacher</h2>
          <button className="btn-header">Watch Video</button>
        </div>
      </section>

      <section className="description">
        <div className="container">
          <h1 className="title">Maths Lessons Online</h1>
          <div className="grid-row">
            <div className="text-content">
              <p>
                Get help with Math through a collection of easy-to-follow,
                curated short Math lessons online for middle school students
                that will focus on the relevant core concepts. Join along with
                these educational videos and short math lessons online as we
                delve into various concepts that are easy to digest and will
                make learning more fun and engaging during the educational
                journey.
              </p>
              <p>
                This website aims to be an instrument in supporting learning and
                will enable students to have additional practice for what they
                learn in their daily studies. Each topic will feature a short
                demonstration video and the accompanying worksheets.
              </p>
              <p>
                Students, together with their parents, will be able to go over
                the contents that will aid in understanding the competencies
                through the video content which is designed to be easy to
                understand and follow along, while the worksheets will enable
                additional practice beyond the textbook in the context of the
                videos.
              </p>
            </div>
            <div className="video-description">
              <video width="100%" height="auto" controls>
                <source
                  src="https://mathswithmrsa.com/wp-content/uploads/2020/04/CHANNEL-TRAILER-INTRODUCTION.mp4"
                  type="video/mp4"
                />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p>
                The material will also be suitable for use in classNameroom
                scenarios for educators who are looking for additional content
                and exercises to use while learning and helping their students
                to further build a strong foundation in mathematics and the
                underlying concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson">
        <div className="container">
          <h1>George Polya’s 4 steps in solving word problems</h1>
          <div className="lesson-cards">
            <div>
              <h3>1. Understand</h3>
              <p>
                Below you will find a collection of resources which we are going
                to cover and the relevant supporting worksheets that are
                available for download. When used in conjunction with the
                lessons that I take you through in the Videos section, this will
                give the student additional practice that can complement
                classNameroom lessons. Take a moment to browse through the
                library to find the topics and find the corresponding working
                materials. These can apply to be used for additional practice
                both at the time of teaching in the classNameroom, for further
                practice at home, or also to review and brush up on past lessons
                and concepts which the student may want to develop further.
              </p>
            </div>
            <div>
              <h3>2. Plan</h3>
              <p>
                In the second step, you should consider the possible approaches
                to tackle the problem. Pen all the alternative ways that can be
                considered to solve the problem since all of the word problems
                are not the same. The consideration of right plan to solve a
                problem will immensely impact the final solution. In this step
                your focus should be on considering the plans and not carrying
                them out. For instance, to figure how many people or things were
                left in the situation, it is important to know how many people
                or things were there to begin with.
              </p>
            </div>
            <div>
              <h3>3. Carry Out</h3>
              <p>
                In the 3rd step you consider and explain your plan to solve a
                problem to obtain the accurate results. The right plan will:
              </p>
              <ul>
                <li>
                  Solve the word problem without raising any further problem{" "}
                </li>
                <li>Plan will be more likely to be carried out</li>
                <li>The Proposed plan will produce best results</li>
              </ul>
              <p>
                The right way to get the best results is to keep track or record
                of each and every thing you do, step by step. After you have sub
                goal figured out, it will be easier to get the final solution.
                Do not miss out any step, for if you miss out any, you might
                have a hard time solving the problem.
              </p>
            </div>
            <div>
              <h3>4. Check</h3>
              <p>
                Once you implement the best possible way to solve the word
                problem. You must check the context throughout so that nothing
                is left behind. Most individuals do not review the context after
                getting an answer which results them in missing out on small
                details that may impact the final solution. Do not move on from
                the word problem unless you’ve reviewed and checked your final
                answer twice. Make sure you’ve covered each and everything that
                you needed to cover. Doing so will enable you to produce the
                best possible and accurate results without having to miss any of
                the details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
