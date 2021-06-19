import React from 'react'
import './App.css'


function Done(props) {
    const toDos = props.data;
    return (
        <div className="done">
            <div className="mainHeading">
                <h1>DONE</h1>
            </div>
            <div className="done">
                {
                    toDos.map((obj) => {
                        return (
                            <div className="done-item">
                                <div className="left">
                                    <p>{obj.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Done
/*{
                    toDos.map((obj)=>{
                        return <h1>obj.text</h1>
                    })
                } */
