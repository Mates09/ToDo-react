// src/App.js
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import PriorityFilter from "./components/PriorityFilter";
import Modal from "./components/Modal";

function App() {
  /*  const [tasks, setTasks] = useState([]); */
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("");

  // Initialize tasks state from Local Storage or default to an empty array
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error reading tasks from Local Storage", error);
      return [];
    }
  });

  // Save tasks to Local Storage whenever tasks array changes
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to Local Storage", error);
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  const updateTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: getNextStatus(task.status) } : task
      )
    );
  };

  const getNextStatus = (status) => {
    switch (status) {
      case "To do":
        return "In progress";
      case "In progress":
        return "Done";
      case "Done":
        return "To do";
      default:
        return status;
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (task) => priorityFilter === "All" || task.priority === priorityFilter
    );

  return (
    <div className="container">
      <h1>Tasks</h1>
      <button
        className="open-modal-button"
        onClick={() => setIsModalOpen(true)}
      >
        Add task
      </button>
      <PriorityFilter
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <br />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="task-columns">
        {["To do", "In progress", "Done"].map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={filteredTasks.filter((task) => task.status === status)}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm addTask={addTask} />
      </Modal>
    </div>
  );
}

export default App;
