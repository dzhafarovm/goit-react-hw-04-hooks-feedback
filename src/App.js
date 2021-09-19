import { useState, useEffect } from 'react';
import { Section } from './Components/Section/Section.jsx';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Components/Statistics/Statistics.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const reviewsСounter = e => {
    switch (e.target.name) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositiveFeedback(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={reviewsСounter}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedback}
      />
    </Section>
  );
};
