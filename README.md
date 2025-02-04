# ToDoApp

A simple and responsive ToDo application built using React. This app allows users to add, complete, and delete tasks efficiently.

## Features

- Add new tasks to your list
- Mark tasks as completed
- Delete tasks from the list
- Responsive design with modern UI

## Technologies Used

- React (useState Hook)
- JavaScript (ES6+)
- Inline CSS for styling

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**  
```bash
git clone https://github.com/yourusername/todo-app.git
```

2. **Navigate to the project directory:**  
```bash
cd todo-app
```

3. **Install dependencies:**  
```bash
npm install
```

4. **Start the development server:**  
```bash
npm start
```

The app will run at `http://localhost:3000` by default.

## Usage

1. **Add a Task:**  
   - Enter a task in the input field.
   - Click the **Add** button to include it in the list.

2. **Mark as Completed:**  
   - Click the checkbox next to a task to mark it as completed. Completed tasks will appear with a strikethrough.

3. **Delete a Task:**  
   - Click the **Delete** button next to a task to remove it from the list.

## Code Overview

### Main Components:

1. **useState Hooks:**
   - `tasks`: Holds the array of task objects.
   - `task`: Manages the current task input value.

2. **Functions:**
   - `addTask()`: Adds a new task to the list if the input is not empty.
   - `toggleTask(index)`: Toggles the completion status of a task.
   - `deleteTask(index)`: Removes a task from the list.

3. **Styling:**
   - Inline CSS is used for basic styling and responsive design.

## Example Code

```javascript
const [tasks, setTasks] = useState([]);
const [task, setTask] = useState("");

const addTask = () => {
  if (task.trim() !== "") {
    setTasks([...tasks, { task: task, completed: false }]);
    setTask("");
  }
};

const toggleTask = (index) => {
  const updatedTasks = tasks.map((t, i) =>
    i === index ? { ...t, completed: !t.completed } : t
  );
  setTasks(updatedTasks);
};

const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
};
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, reach out via [your.email@example.com](mailto:your.email@example.com).

