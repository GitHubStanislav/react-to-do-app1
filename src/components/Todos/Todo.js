import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";
function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <div className={styles.todoText}>
        <RiTodoFill className={styles.todoIcon} />
        <h3>{todo.text}</h3>
        <div>
            <RiDeleteBin2Line className={styles.deleteIcon} />
            <FaCheck className={styles.checkIcon}/>
        </div>

      </div>
    </div>
  );
}

export default Todo;
