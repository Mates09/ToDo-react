 To-Do App Documentation
Overview

This project is a responsive, modern To-Do application built with React. The app includes task categorization, status management, priority filtering, and a JSON-based local storage system. The design uses a colorful, dark-themed, and minimalistic interface with hover and modal effects.
Features

    Task Management: Users can add, edit, delete, and manage task statuses (“To Do,” “In Progress,” “Done”).
    Priority Filtering: Filter tasks by priority level to manage tasks based on importance.
    Responsive Design: Layout adapts to various screen sizes, stacking columns vertically on smaller screens.
    Modern UI: Features a modal-based form, hover effects, color gradients, and flexible button states.
    Persistent Storage: Tasks are saved in a data.json file (serving as a mock database), updated dynamically.

Folder Structure

Key Components

    App.js: The main component initializing the app layout, fetching data, and managing global state.
    TaskList.js: Organizes tasks into columns based on their status (To Do, In Progress, Done).
    TaskCard.js: Displays individual task information, allowing for status changes, priority filtering, and deletion.
    AddTaskModal.js: Handles task addition through a popup modal with basic form validation.
    dataHandler.js: Utility functions for reading and writing to data.json, simulating a database.

Setup

    Clone the repository:

    bash

git clone <repository-url>

Install dependencies:

bash

npm install

Start the application:

bash

    npm start

    JSON Storage (data.json): Ensure data.json exists in src/data/ with initial data or an empty array ([]). Changes to tasks will persist in this file.

Usage
Adding Tasks

    Click the “Add Task” button to open a modal form.
    Enter the task title and select a priority level.
    Submit the form to add the task to the list.

Managing Task Status

    Each task has a status button:
        Start: Changes status to "In Progress."
        Finish: Changes status to "Done."
        Reset: Resets status to "To Do."
    Tasks also have a delete button for removal.

Filtering by Priority

    Use the filter component at the top to filter tasks by priority level (High, Medium, Low).

Customization

    Styling: Modify App.css to adjust colors, layout, or typography.
    Data Storage: Update dataHandler.js if integrating with a different storage backend.
    Additional Features: Add components under components/ for new functionality.

Future Improvements

    User Authentication: Secure tasks with user-specific access.
    Drag-and-Drop Interface: Implement drag-and-drop to rearrange task statuses.
    API Integration: Replace data.json with a live backend for real-time data syncing.
