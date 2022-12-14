import React from "react";
import Todo from "./components/Todo";
import "./components/style/App.css"


const App = () => {
  return (
    <div className="all"> 
      <header>
        <h1>Todo App</h1>  
      </header>  
      <Todo />
    </div>

  )
};

export default App
