import { RiTodoFill } from "react-icons/ri";
import styles from './Todo.module.css'
function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <div className={styles.todoText}>
        <RiTodoFill className={styles.reactIcon} />
        <h3>{todo.text}</h3>
      </div>
    </div>
  );
}

export default Todo;
