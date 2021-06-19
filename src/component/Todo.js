import React, { useState, useEffect } from "react";
import "./App.css";
import Done from './Done' 

function Todo() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("toDos"))
    if(localStorage.length === 0){
      const emArray = []
      localStorage.setItem("toDos",JSON.stringify(emArray))
    }else{
      setTodos(localData)
    }
  },[])

  const handleTodo = () => {
    const allItem = [...toDos, { id: Date.now(), text: toDo, status: false }]
    setTodos(allItem);
    localStorage.setItem("toDos",JSON.stringify(allItem))
    setTodo("");
  };

  const deleteTodo = (key) => {
    const data = toDos.filter((obj, index) => index !== key)
    setTodos(data)
    localStorage.setItem("toDos",JSON.stringify(data))
  };

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
          {toDos.map((dataObject, index) => {
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
                            const data = toDos;
                            localStorage.setItem("toDos",JSON.stringify(data))
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
                  <i
                    className="fas fa-times"
                    onClick={() => deleteTodo(index)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Done data={
        toDos.filter((obj)=>{
          if(obj.status === true){
            return obj;
          }

          return null
        })
      }/>
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
