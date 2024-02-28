import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

  const [todoList, setTodoList] = useState([]);

  const updateTodoList = (newTodo)=>{
    setTodoList((prevTodo)=>(
      [...prevTodo, newTodo]
    ))
  }
  const handleCompleted = (todoFromBelow) => {
    let updateTodos = todoList.map((todo) => {
      if (todo === todoFromBelow) {
        let newTodo = { ...todo}
        newTodo.isComplete = !todo.isComplete;
        return newTodo;
      }
      else {
        return todo;
      }
    })
    setTodoList(updateTodos);
  }
  const deleteButton = (idFromBelow) => {
    const filteredTodos = todoList.filter((todo) => {
      return todo.id !== idFromBelow;
    });
    setTodoList(filteredTodos);
  };
  return (
    <div className="App">
      <Form
        updateTodoList={updateTodoList}
      />
      <Display todoList={todoList} handleCompleted={handleCompleted} deleteButton={deleteButton}/>
    </div>
  );
}

export default App;