import React from 'react';

function GoalCard({ text, completed, onComplete, onDelete }) {
  return (
    <div className={`goal-card ${completed ? 'completed' : ''}`}>
      <p>{text}</p>
      <div className="card-buttons">
        <button onClick={onComplete}>✅</button>
        <button onClick={onDelete}>❌</button>
      </div>
    </div>
  );
}

export default GoalCard;
