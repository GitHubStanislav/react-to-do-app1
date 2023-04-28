import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          <h1>Todo App</h1>
          <input
            onChange={(event) => setText(event.target.value)}
            value={text}
            type="text"
            placeholder="Enter new todo "
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
