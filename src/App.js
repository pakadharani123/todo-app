import React, { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('mytasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('mytasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>🌟 MyTasks+</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <input
        type="text"
        placeholder="🔍 Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <AddTaskForm addTask={addTask} />
      
      <div className="stats">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {total - completed}</p>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
