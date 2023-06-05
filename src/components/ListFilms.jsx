import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchFilms } from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from 'react-router-dom';
import css from './ListFilms.module.css';

function ListFilms({ filter = '' }) {
  const [films, setfilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryResult = filter ? fetchFilms(filter) : fetchFilms();
    queryResult
      .then(result => setfilms(result))
      .catch(() => toast.error("We can't find any film about your reguest"));
  }, [filter]);

  return (
    <ul className={css.list}>
      {films.map(film => (
        <li key={film.id} className={css.link}>
          <Link
            to={
              location.pathname === `/`
                ? `movies/${film.id.toString()}`
                : `${film.id.toString()}`
            }
            state={{ from: location }}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

ListFilms.propTypes = {
  filter: PropTypes.string,
};

export default ListFilms;
