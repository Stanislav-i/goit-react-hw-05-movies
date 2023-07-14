import { Link } from 'react-router-dom';
import css from './MovieItem.module.css'

const MovieItem = ({id, title, poster}) => {
    return (
    //   <div className={css.trendingContainer}>
        <Link className={css.trendingContainer} to={`/movies/${id}`}>
          <div className={css.imageThumb}>
          <img
            className={css.poster}
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt="movie poster"
            />
          </div>
          <div className={css.title}>
            <li>{title}</li>
          </div>
        </Link>
    //   </div>
    );
};

export default MovieItem;
