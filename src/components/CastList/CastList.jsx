import { useState, useEffect } from 'react';
import { fetchCastData } from 'Services/api';
import css from './CastList.module.css';
import { ProgressBar } from 'react-loader-spinner';

const CastList = ({ movieId }) => {
  const [castList, setCastList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        await fetchCastData(movieId).then(cast => setCastList(cast.cast));
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // async function fetchMovieCast() {
    //   await fetch(
    //     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=58fde9f9a3392c3dbee86a1f2142354e`
    //   )
    //     .then(response => response.json())
    //     .then(cast => {
    //       setCastList(cast.cast);
    //     });
    // }

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      
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

      <ul>
        {error ? (
          <p>
            Something went wrong... Please, try again later.
            <br />
            Error is: {error}
          </p>
        ) : (
          castList.map(({ character, name, profile_path, id }) => (
            <li className={css.card} key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt=""
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CastList;
