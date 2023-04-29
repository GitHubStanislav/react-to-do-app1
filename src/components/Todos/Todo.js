import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";
function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <div className={styles.todoText}>
        <RiTodoFill className={styles.todoIcon} />
        <h3>{todo.text}</h3>
        <div>
          <RiDeleteBin2Line
            onClick={() => deleteTodo(todo.id)}
            className={styles.deleteIcon}
          />
          <FaCheck
            onClick={() => toggleTodo(todo.id)}
            className={styles.checkIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
