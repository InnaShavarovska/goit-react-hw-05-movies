import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { PropTypes } from 'prop-types';

function Back({ to, children }) {
  return (
    <Link to={to}>
      <HiArrowNarrowLeft size="18" />
      {children}
    </Link>
  );
}

Back.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node,
};
export default Back;
