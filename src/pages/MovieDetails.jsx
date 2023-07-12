import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => { 
    const { id } = useParams();
    const  [movieTitle, setMovieTitle]  = useState(''); 
    const [moviePoster, setMoviePoster] = useState('');
    
        useEffect(() => {
          async function fetchTrendingMovies() {
            await fetch(
              `https://api.themoviedb.org/3/movie/${id}?api_key=58fde9f9a3392c3dbee86a1f2142354e`
            )
              .then(response => response.json())
                .then(movie => {
                    console.log(movie);
                    console.log(movie.title);
                    console.log(movie.poster_path);
                    setMovieTitle(movie.title);
                    setMoviePoster(movie.poster_path);
                });
          }

          fetchTrendingMovies();
        }, [id]);
const picture = `https://image.tmdb.org/t/p/w500/${moviePoster}`;
    return (
      <div>
        <h2>Movie ID: {id}</h2>
        <h3>{movieTitle}</h3>
        <img src={picture} alt="" />
      </div>
    );
}

export default MovieDetails;