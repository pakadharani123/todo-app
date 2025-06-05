import React, { useState } from 'react';
import GoalCard from './GoalCard';

function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goal.trim() !== '') {
      setGoals([...goals, { text: goal, completed: false }]);
      setGoal('');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...goals];
    updated[index].completed = !updated[index].completed;
    setGoals(updated);
  };

  const deleteGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>🌟 Daily Goals Tracker</h1>
      <div className="input-container">
        <input 
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal..."
        />
        <button onClick={addGoal}>Add Goal</button>
      </div>

      <div className="goals-list">
        {goals.map((g, index) => (
          <GoalCard
            key={index}
            text={g.text}
            completed={g.completed}
            onComplete={() => toggleComplete(index)}
            onDelete={() => deleteGoal(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
