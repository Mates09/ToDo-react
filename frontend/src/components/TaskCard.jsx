// src/components/TaskCard.js
import React from "react";
import truncateTitle from "../utils/truncateTitle";

function TaskCard({ task, updateTaskStatus, deleteTask }) {
  return (
    <div className="task-card">
      <h3 className="task-card-info-title">{truncateTitle(task.title)}</h3>
      <br />
      <div className="task-card-info">
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>
      </div>
      <button onClick={() => updateTaskStatus(task.id)}>
        {task.status === "To do"
          ? "Start"
          : task.status === "In progress"
          ? "Finish"
          : "Restart"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
