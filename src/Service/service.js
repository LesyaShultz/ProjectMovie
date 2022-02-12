import axios from "axios";

const KEY_API = "34f85537887d254751a7d6b41d4ef364";
const API_URL = "https://api.themoviedb.org/3";

// const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${KEY_API}`;
// const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${KEY_API}`;

//Список жанрів
const GENRE_URL = `${API_URL}/genre/movie/list`;

//Всі фільми
const MOVIES_URL = `${API_URL}/discover/movie/`;

//Зараз
const NOW_PLAYNG_URL = `${API_URL}/movie/popular`;

//топ рейтингу
const TOP_RATED_URL = `${API_URL}/movie/now_playing `;

//один фільм
const MOVIE_URL = `${API_URL}/movie`;

//актори
const PERSON_URL = `${API_URL}/trending/person/week`;

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w780";

//картинка

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(NOW_PLAYNG_URL, {
      params: {
        api_key: KEY_API,
        language: "ru-US",
        page: 1,
      },
    });

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: IMAGE_BASE_URL + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: IMAGE_BASE_URL + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(GENRE_URL, {
      params: {
        api_key: KEY_API,
        language: "ru",
        page: 1,
      },
    });
    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));
     return modifiedData;
  } catch (error) {}
};


 
export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(MOVIES_URL, {
      params: {
        api_key: KEY_API,
        language: "ru",
        page: 1,
        with_genres: genre_id
      }
    });
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; //картинки

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: IMAGE_BASE_URL + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: IMAGE_BASE_URL + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    
    }));
     return modifiedData;
  } catch (error) {}
};

export const fetchPersons = () => {};

export const fetchTopRatedMovie = () => {};

export const fetchMovieDetail = () => {};

export const fetchMovieVideos = () => {};

export const fetchCasts = () => {};

export const fetchSimilarMovie = () => {};
