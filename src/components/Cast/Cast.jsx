import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import styles from './Cast.module.scss';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(message => console.log(message));
  }, [movieId]);

  return (
    <>
      {cast && cast.length ? (
        <ul className={styles.list}>
          {cast.map(({ character, profile_path, name, id }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="140"
                  height="175"
                />
              ) : (
                <img
                  src={
                    'https://restorixhealth.com/wp-content/uploads/2018/08/No-Image-684x1024.png'
                  }
                  alt={name}
                  width="140"
                  height="175"
                />
              )}
              <div className={styles.item}>
                <h2 className={styles.item_title}>{name}</h2>
                <h2 className={styles.item_title}>Character: </h2>
                <p className={styles.item_title}>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don't have any casts for this movie</h3>
      )}
    </>
  );
};

export default Cast;