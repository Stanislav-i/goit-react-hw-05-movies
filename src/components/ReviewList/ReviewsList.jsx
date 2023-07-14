import { useState, useEffect } from 'react';
import { fetchReviewData } from 'Services/api';
import css from './ReviewList.module.css';
import { ProgressBar } from 'react-loader-spinner';

const Reviews = ({ movieId }) => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        await fetchReviewData(movieId).then(reviews => {
          const newReviewList = reviews.results;
          if (newReviewList.length === 0) {
            return
          }
          setReviewList(reviews.results);
        });
      } catch (error) {
        console.log(error.message);
         setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // async function fetchMovieReviews() {
    //   await fetch(
    //     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=58fde9f9a3392c3dbee86a1f2142354e`
    //   )
    //     .then(response => response.json())
    //     .then(reviews => {
    //         setreviewList(reviews.results)
    //     });
    // }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
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

      {error !== null && (<p>Error occured! Error is {error}</p>)}

      {reviewList.length > 0 ? (
        <ul>
          {reviewList.map(({ author, content, id }) => (
            <li className={css.item} key={id}>
              <h3 className={css.title}>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (<p>Ooops!</p>)
    }

      {/* {reviewList.length > 0 && (
        <ul>
          {reviewList.map(({ author, content, id }) => (
            <li className={css.item} key={id}>
              <h3 className={css.title}>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Reviews;
