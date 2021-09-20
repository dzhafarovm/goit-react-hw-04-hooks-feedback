import PropTypes from 'prop-types';

export const Notification = ({ mesage }) => {
  return <h3>{mesage}</h3>;
};

Notification.propTypes = {
  mesage: PropTypes.string.isRequired,
};
