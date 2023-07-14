import { useParams, NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CastList from 'components/CastList/CastList';
import ReviewsList from 'components/ReviewList/ReviewsList';
import { fetchMovieData } from 'Services/api';
import css from './MovieDetails.module.css';
import { ProgressBar } from 'react-loader-spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieTitle, setMovieTitle] = useState('');
  const [moviePoster, setMoviePoster] = useState('');
  const [score, setScore] = useState(null);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        await fetchMovieData(id).then(data => {
          setMovieTitle(data.title);
          setMoviePoster(data.poster_path);
          setScore(data.vote_average.toFixed(1));
          setOverview(data.overview);
          setGenres(data.genres);
        });
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
       }
    };

    // async function fetchMovieDetails(movieId) {
    //   await fetch(
    //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=58fde9f9a3392c3dbee86a1f2142354e`
    //   )
    //     .then(response => response.json())
    //     .then(movie => {
    //       // console.log(movie);

    //       setMovieTitle(movie.title);
    //       setMoviePoster(movie.poster_path);
    //       setScore(movie.vote_average);
    //       setOverview(movie.overview);
    //       setGenres(movie.genres);
    //     });
    // }

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <button className={css.button}>Go Back</button>

              {isLoading && (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        )}

      {error ? (
        <p>
          Something went wrong... Please, try again later.
          <br />
          Error is: {error}
        </p>
      ) : (
        <>
          <div className={css.movieInfo}>
            <div className={css.imageThumb}>
                <img className={css.image}
                src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
                alt=""
              />
            </div>
            <div className={css.infoContainer}>
              <h2 className={css.title}>{movieTitle}</h2>
              <p className={css.score}>User Score: {score}%</p>
              <h3 className={css.overview}>Overview</h3>
              <p>{overview}</p>
              <h3 className={css.genres}>Genres</h3>
              <ul className={css.infoList}>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className={css.addInfo}>Additional information</p>

          <div className={css.addInfoContainer}>
            <button className={css.linkContainer}>
              <NavLink className={css.link} to="cast">
                Cast
              </NavLink>
            </button>
            <button className={css.linkContainer}>
              <NavLink className={css.link} to="reviews">
                Reviews
              </NavLink>
            </button>
          </div>

          <Routes>
            <Route path="cast" element={<CastList movieId={id} />}></Route>
            <Route
              path="reviews"
              element={<ReviewsList movieId={id} />}
            ></Route>
          </Routes>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
