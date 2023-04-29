import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './Todos.Actions.module.css'

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button disabled={!completedTodosExist} title="Clear Complited" onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
