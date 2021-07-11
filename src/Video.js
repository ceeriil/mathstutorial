import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import VideoCard from "./components/VideoCard";
import VideoCarousel from "./components/VideoCarousel";
import { SurfaceAreaVideos } from "./components/VideoList";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      SurfaceAreaVideos: SurfaceAreaVideos,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.SurfaceAreaVideos.filter(
      (surfaceAreaVideos) => {
        return surfaceAreaVideos.snippet.title
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase());
      }
    );
    return (
      <main>
        <section className="videos showcase">
          <div className="container">
            <h1>Tutorial Videos</h1>
            <h2>
              A collection of free online tutorial videos that will cover key
              areas of mathematics
            </h2>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
        </section>
        <section className="video">
          <div className="container">
            <VideoCarousel SurfaceAreaVideos={filteredRobots} />
          </div>
        </section>
      </main>
    );
  }
}

export default Video;
