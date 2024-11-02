// src/components/TaskForm.js
import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (title.trim() === "") {
      setError("Title is required");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      status: "To do",
      dueDate,
      priority,
    };

    addTask(newTask);
    setError("");
    setTitle("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br />
      <br />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      <br />
      <br />
      <button onClick={handleSubmit}>Add task</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default TaskForm;
