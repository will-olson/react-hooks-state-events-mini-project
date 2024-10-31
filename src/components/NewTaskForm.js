import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        {categories.filter(cat => cat !== "All").map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;