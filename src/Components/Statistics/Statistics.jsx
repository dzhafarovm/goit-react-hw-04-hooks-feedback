import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <Notification mesage="No feedback given" />
      ) : (
        <div>
          <p className={css.good}>Good: {good}</p>
          <p className={css.neutral}>Neutral: {neutral}</p>
          <p className={css.bad}>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positivePercentage}%</p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
