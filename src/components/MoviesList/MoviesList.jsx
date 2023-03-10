import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.scss';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={styles.list}>
        {movies &&
          movies.map(({ id, name, title}) => (
            <li key={id} className={styles.item}>
              <Link to={`/movies/${id}`} state={{ location }}>
                <p className={styles.item_p}>{name ? name : title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};