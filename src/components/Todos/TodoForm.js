import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter new todo ");
  const [isTextEmpty, setTextEmpty] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!!text) {
      setTextEmpty(false);
      setPlaceholder("Enter new todo ");
      addTodo(text);
      setText("");
    } else {
      setTextEmpty(true);
      setPlaceholder("please enter some text");
    }
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
          placeholder={placeholder}
          className={isTextEmpty ? styles["placeholderUpdated"] : ""}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
