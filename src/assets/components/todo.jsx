import { useState } from "react";

const ToDoApp = () => {
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

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", 
        backgroundColor: "#e9ecef", 
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%", 
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>ToDo App</h1>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(index)}
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <span
                style={{
                  flex: 1,
                  cursor: "pointer",
                  textDecoration: t.completed ? "line-through" : "none",
                  color: t.completed ? "#888" : "#333",
                }}
              >
                {t.task}
              </span>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  padding: "5px 10px",
                  fontSize: "14px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
