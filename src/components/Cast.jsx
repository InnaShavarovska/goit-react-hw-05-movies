import React from 'react';
import { fetchCastFilmById } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [cast, setCast] = useState([]);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    fetchCastFilmById(id).then(result => setCast(result));
  }, [id]);

  return (
    <ul>
      {cast.map(({ id, name, photo, character }) => (
        <li key={id}>
          {photo && <img src={photo} alt={name} />}
          <p>Actor: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
