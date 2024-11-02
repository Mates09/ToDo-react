// src/components/PriorityFilter.js
import React from "react";

function PriorityFilter({ priorityFilter, setPriorityFilter }) {
  return (
    <div className="priority-filter">
      <label>Filter by Priority:</label>
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default PriorityFilter;
