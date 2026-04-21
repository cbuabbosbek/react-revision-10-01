import { useState } from "react";
import { Link } from "react-router";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to school",
    },
    {
      id: 2,
      title: "Play Football",
    },
  ]);

  return (
    <>
      <h1>2. TodoApp</h1>
      <div className="input">
        <input type="text" placeholder="Add a task" />
        <button>Add</button>
      </div>
      <div className="Board">
        {todos.map((t) => {
          return (
            <div key={t.id} className="BoardBox">
              <h1> {t.title} </h1>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoApp;
