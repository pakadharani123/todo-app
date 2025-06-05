import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
  const today = new Date().toISOString().split('T')[0];
  const isOverdue = task.due && task.due < today;

  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span>{task.text}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        {task.due && (
          <span className={`due ${isOverdue ? 'overdue' : ''}`}>
            📅 {task.due}
          </span>
        )}
      </div>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}

export default TaskItem;

