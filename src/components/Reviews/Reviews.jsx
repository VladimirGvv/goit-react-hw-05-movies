import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import styles from './Reviews.module.scss';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(message => console.log(message));
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id} className={styles.item}>
              <h2 className={styles.item}>{author}:</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </>
  );
};
export default Reviews;