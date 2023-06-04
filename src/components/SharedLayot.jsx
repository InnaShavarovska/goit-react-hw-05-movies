import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader';
import css from './SharedLayot.module.css';

function Layout() {
  return (
    <>
      <ToastContainer />
      <header>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.link}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
