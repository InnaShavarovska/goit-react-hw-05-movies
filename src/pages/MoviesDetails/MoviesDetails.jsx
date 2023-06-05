import { useState, useEffect, Suspense } from 'react';
import Back from '../../components/Back';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmById } from '../../services/api';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader';
import { useRef } from 'react';

function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  const location = useLocation();
  const back = useRef(location.state?.from ?? '/home');

  useEffect(() => {
    fetchFilmById(movieId)
      .then(result => setFilm(result))
      .catch(() =>
        Notiflix.Notify.failure(
          'Sorry, there are any information about this film'
        )
      );
  }, [movieId]);

  const { poster_path, title, userScore, overview, genres } = film;

  return (
    <section>
      <Back to={back.current}>Back</Back>
      <div>
        <img src={poster_path} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{`User score: ${userScore}`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
}

export default MovieDetails;
