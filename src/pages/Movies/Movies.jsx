import React, { useState } from 'react';
import ListFilms from '../../components/ListFilms';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

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
          placeholder="Enter name of film you want to find"
        />
        <button type="submit">Search</button>
      </form>
      {filter && <ListFilms filter={filter} />}
    </div>
  );
}

export default Movies;
