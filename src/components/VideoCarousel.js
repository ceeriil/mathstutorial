import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import VideoCard from "./VideoCard";
import {
  CircleGeometry,
  CompoundInterest,
  ProfitAndLoss,
  scaleDiagram,
  SurfaceAreaVideos,
  triangles,
  VideoLists,
} from "./VideoList";

const VideoCarousel = ({ SurfaceAreaVideos }) => {
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        lazyLoad={true}
        responsiveClass={true}
        navText={[
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ]}
        responsive={{
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: true,
            loop: false,
            videoHeight: "120%",
          },
        }}
      >
        {VideoLists.map((id, i) => {
          return (
            <VideoCard
              key={i}
              embedId={VideoLists[i].embedId}
              title={VideoLists[i].title}
              description={VideoLists[i].description}
            />
          );
        })}
      </OwlCarousel>

      <div>
        <h2 className="topics">Surface Area of 3D shapes</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad={true}
          responsiveClass={true}
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              videoHeight: "120%",
            },
          }}
        >
          {SurfaceAreaVideos.map((id, i) => {
            return (
              <VideoCard
                key={i}
                embedId={SurfaceAreaVideos[i].snippet.resourceId.videoId}
                title={SurfaceAreaVideos[i].snippet.title}
                description={SurfaceAreaVideos[i].snippet.description}
              />
            );
          })}
        </OwlCarousel>
      </div>

      <div>
        <h2 className="topics">Scale Diagram, Reduction and Enlargement</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad={true}
          responsiveClass={true}
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              videoHeight: "120%",
            },
          }}
        >
          {scaleDiagram.map((id, i) => {
            return (
              <VideoCard
                key={i}
                embedId={scaleDiagram[i].snippet.resourceId.videoId}
                title={scaleDiagram[i].snippet.title}
                description={scaleDiagram[i].snippet.description}
              />
            );
          })}
        </OwlCarousel>
      </div>

      <div>
        <h2 className="topics">Circle Geometry</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad={true}
          responsiveClass={true}
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              videoHeight: "120%",
            },
          }}
        >
          {CircleGeometry.map((id, i) => {
            return (
              <VideoCard
                key={i}
                embedId={CircleGeometry[i].snippet.resourceId.videoId}
                title={CircleGeometry[i].snippet.title}
                description={CircleGeometry[i].snippet.description}
              />
            );
          })}
        </OwlCarousel>
      </div>

      <div>
        <h2 className="topics">Triangles</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad={true}
          responsiveClass={true}
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              videoHeight: "120%",
            },
          }}
        >
          {triangles.map((id, i) => {
            return (
              <VideoCard
                key={i}
                embedId={triangles[i].snippet.resourceId.videoId}
                title={triangles[i].snippet.title}
                description={triangles[i].snippet.description}
              />
            );
          })}
        </OwlCarousel>
      </div>

      <div>
        <h2 className="topics">Profit, Loss and Percentages</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad={true}
          responsiveClass={true}
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              videoHeight: "120%",
            },
          }}
        >
          {ProfitAndLoss.map((id, i) => {
            return (
              <VideoCard
                key={i}
                embedId={ProfitAndLoss[i].snippet.resourceId.videoId}
                title={ProfitAndLoss[i].snippet.title}
                description={ProfitAndLoss[i].snippet.description}
              />
            );
          })}
        </OwlCarousel>
      </div>

      <div>
        <h2 className="topics">Compound Interest</h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad={true}
          responsiveClass={true}
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: true,
              loop: false,
              videoHeight: "120%",
            },
          }}
        >
          {CompoundInterest.map((id, i) => {
            return (
              <VideoCard
                key={i}
                embedId={CompoundInterest[i].snippet.resourceId.videoId}
                title={CompoundInterest[i].snippet.title}
                description={CompoundInterest[i].snippet.description}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default VideoCarousel;
