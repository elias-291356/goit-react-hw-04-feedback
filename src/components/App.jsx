import React, { useState } from 'react';
import FeedbackOptions from './Feedbacks/Feedbacks';
import Statistics from './Statisticks/Statisticks';
import Section from './Section/Section';
import 'bulma/css/bulma.css';
export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (type) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  const handleResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const onClickResetForm = (event) => {
    const { name } = event.target;
    if (name !== "good" && name !== "neutral" && name !== "bad") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
  }


  const { good, neutral, bad } = feedback;

  return (
    <div className='container content' >

      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleLeaveFeedback}
          onResetFeedback={handleResetFeedback}
        />
      </Section>
      <Section >

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          onClick={onClickResetForm}
        />
      </Section>
    </div>
  );
}






