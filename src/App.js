import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");     
  const [tasks, setTasks] = useState([]);      
  const [editIndex, setEditIndex] = useState(-1); 

 
  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex >= 0) {
    
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(-1);
    } else {
      
      setTasks([...tasks, task]);
    }

    setTask(""); // clear input
  };

 
  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
    if (editIndex === index) setEditIndex(-1);
  };


  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>CRUD To-Do App</h1>
      <div className="input-section">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>{editIndex >= 0 ? "Update" : "Add"}</button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <div>
              <button className="edit" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
