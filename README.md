 To-Do App Documentation
Overview

Basit ToDo app in React

   Task Management: Users can add, edit, delete, and manage task statuses (“To Do,” “In Progress,” “Done”).
    Priority Filtering: Filter tasks by priority level to manage tasks based on importance,
    Persistent Storage: Tasks are saved in a data.json file (serving as a mock database), updated dynamically.


Setup

    
```
$ git clone https://github.com/Mates09/ToDo-react
```



Install dependencies:

```
npm install
```

Start the application:


```bash
npm run dev
```

Usage

Adding Tasks

   Click the “Add Task” button to open a modal form.
    Enter the task title, date and select a priority level.
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

   Styling: Modify style.css to adjust colors, layout, or typography.
    or use app.css to get cyberpunk style of app
   
