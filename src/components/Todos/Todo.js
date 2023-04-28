import { RiTodoFill } from "react-icons/ri";
function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)}>
      <div className="flex_div">
        <RiTodoFill />
        <h3>{todo}</h3>
      </div>
    </div>
  );
}

export default Todo;
