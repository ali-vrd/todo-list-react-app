import React from "react";
import { useState } from "react";
import "./style/Todo.css";

const Todo = (props) => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState("");
  const inputChangeHandler = (event) => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = (event) => {
    event.preventDefault()
    setTodoList(todoList.concat(todoName))
    setTodoName("")
  }

  return (
    <div>
      <form  className="form" onSubmit={todoAddHandler}>
        <div className="inputs">
          <input type="text"
            placeholder="add todo..."
            onChange={inputChangeHandler}
            value={todoName}
          />
        </div>
        <div>
          <button>ADD</button>
        </div>
      </form>
        <ul>
          {/* { 
          
            todoList.map( (todo) => {
              console.log(<li key={todo}>{todo}</li>)
            })
          
          } */}
        </ul>
    </div>
  );
};

export default Todo
