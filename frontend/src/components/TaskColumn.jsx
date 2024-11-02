// src/components/TaskColumn.js
import React from "react";
import TaskCard from "./TaskCard";

function TaskColumn({ status, tasks, updateTaskStatus, deleteTask }) {
  return (
    <div className="task-column">
      <h2>{status}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskColumn;
