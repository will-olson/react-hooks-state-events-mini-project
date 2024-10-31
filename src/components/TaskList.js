import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          id={task.id}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;