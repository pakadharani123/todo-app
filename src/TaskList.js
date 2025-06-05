import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks found.</p> :
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      }
    </div>
  );
}

export default TaskList;
