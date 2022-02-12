import React, { useEffect, useState } from "react";
import { fetchMovies, fetchGenre } from "../../Service/service";
import { Carousel } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./Home.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import GenreCard from "./GenreCard/GenreCard";

export function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await fetchMovies());
    };

    fetchApi();
  }, []);

  const movies = nowPlaying.slice(0, 8).map((item, index) => {
    return (
      <Carousel.Item
        key={index}
        interval={2000}
        style={{ height: 400 }}
        // Fade={true}
      >
        <img
          src={item.backPoster}
          alt={item.title}
          style={{ width: "100%", height: "100%" }}
        />

        <div className="carousel-center">
          <i
            className="fa-solid fa-circle-play"
            style={{ fontSize: 100, color: "yellow" }}
          ></i>
        </div>
        <Carousel.Caption>
          <h3>{item.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
    <div className="wrap-carousel">
      <Carousel pause={false}>{movies}</Carousel>
    </div>
      
   
      </div>
    

    
  );
}

export default Home;
