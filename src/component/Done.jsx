import React from 'react'


function Done(props) {
    const toDos = props.data;
    return (
        <div>
            {
                toDos.map((data)=>{
                    return (
                        <h1>
                        {data.text}
                        </h1>

                    )
                })
            }
        </div>
    )
}

export default Done
