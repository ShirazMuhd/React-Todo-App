import React, { useState } from 'react';
import './App.css';

function Todo() {

  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, Todo])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {

          <div className="todo">
            <div className="left">
              <input type="checkbox" name="" id="" />
              <p>Rect tutorial</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>

        }
      </div>
    </div>
  );
}


export default Todo;