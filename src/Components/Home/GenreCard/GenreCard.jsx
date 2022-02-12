import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import { fetchMovieByGenre, fetcMovies } from "../../../Service/service";


function GenreCard() {
const [movieByGenre, setMovieByGenre] = useState([]);

useEffect(() => {
    const fetchApi = async () => {
        setMovieByGenre(await fetchMovieByGenre());
    };

    fetchApi();
  }, []);

  const movieList = movieByGenre.slice(0, 16).map((item, index) => {
      return(
          
          <div >
          <div  key={index}>
              
                  <NavLink to={`/movie/${item.id}`}>
                      <img className="img-fluid" src={item.poster} alt={item.title}></img>
                      <p>Рейтинг:{item.rating} </p>
                  </NavLink>
              </div>
          </div>
         
         
         
      )
  } 

  )

    return(
        <div className="container">
        <div className="row row-cols-4">{movieList}</div>
        </div>
            
    )
   
}

export default GenreCard;