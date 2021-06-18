import React, { useState,useEffect } from "react";
import "./App.css";

function Todo() {

  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  const handleTodo = () => {    
    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])   
    setTodo('')
  };

  const deleteTodo = key => {
    setTodos(toDos.filter((obj,index)=> index !== key))
  }

  return (
    <div className="app">

      <div className="todo">
        <div className="mainHeading">
          <h1>TODO</h1>
        </div>
        <div className="input">
          <input
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Add item..."
            value={toDo}
          />
          <i onClick={handleTodo} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map((dataObject,index) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(dataObject);
                      setTodos(
                        toDos.filter((obj2) => {
                          if (obj2.id === dataObject.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={dataObject.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{dataObject.text}</p>
                </div>
                <div className="right">
                <i className="fas fa-times" onClick={()=> deleteTodo(index)}></i>
                </div>
              </div>
            );
          })}
        </div>
        {toDos.map((object) => {
            if (object.status) {
              return <h1>{object.text}</h1>;
            }

            return null;
          })}
      </div>
      

    </div>
  );
}

export default Todo;
/*
const allItems = toDos;
    allItems.splice(key,1)
    setTodos(allItems)
    console.log(allItems);
    console.log(toDos);
*/