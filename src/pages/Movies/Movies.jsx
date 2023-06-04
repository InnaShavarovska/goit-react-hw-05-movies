import React, { useState } from 'react';
import ListFilms from '../../components/ListFilms';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import css from './Movies.module.css';

function Movies() {
  const [filter, setFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (value) {
      setFilter(value);
      setSearchParams({ query: value });
    }
  };

  useEffect(() => {
    setFilter(query);
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter name of film "
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {filter && <ListFilms filter={filter} />}
    </div>
  );
}

export default Movies;
