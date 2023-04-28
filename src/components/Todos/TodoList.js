import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;
