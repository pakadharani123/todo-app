import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [due, setDue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      id: Date.now(),
      text,
      priority,
      due,
      completed: false
    });

    setText('');
    setPriority('Medium');
    setDue('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
