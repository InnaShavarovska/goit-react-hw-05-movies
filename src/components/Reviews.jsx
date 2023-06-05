import React from 'react';
import { fetchReviewsFilmById } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsFilmById(movieId).then(result => setReviews(result));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p>There are any reviews for this movie</p>}
    </>
  );
}

export default Reviews;
