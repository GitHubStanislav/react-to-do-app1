import { RiTodoFill } from "react-icons/ri";
import styles from './Todo.module.css'
function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <div className={styles.todoText}>
        <RiTodoFill className={styles.reactIcon} />
        <h3>{todo}</h3>
      </div>
    </div>
  );
}

export default Todo;
