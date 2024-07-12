import React from 'react';

const ScoreIndicator = ({ score }) => {
  return (
    <div className="score-indicator">
      <h2>Score</h2>
      <div className="score-circle">
        <p>{score}</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default ScoreIndicator;
