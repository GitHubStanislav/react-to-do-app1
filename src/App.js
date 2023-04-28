
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";


function App() {
  const [todos , setTodos] = useState([])
  const addTodoHandler = (text) =>{
    const newTodo = {
        text: text,
        isCompleted: false,
        id: uuidv4()
    }
      setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (index)=>{
    setTodos(todos.filter((_,idx) => idx !==index))
  }
  return (
      <div className="App">
       <h1>Todo App 1</h1>
        <TodoForm addTodo ={addTodoHandler}/>
        <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
      </div>
  );
}

export default App;