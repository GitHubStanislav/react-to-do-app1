import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Complited" onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
