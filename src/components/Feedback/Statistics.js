import React from 'react';

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <span className="Feedback_title">Statistic</span>
    <ul className="Statistic_list">
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
    </ul>
  </div>
);

export default Statistics;
