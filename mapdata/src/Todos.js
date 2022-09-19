import React,{Component, component} from 'react'

const Todos=(props)=>{
    return(
        <div>
        <h2>welcome to {props.name}</h2>
        <button onClick={()=> alert("hello")}>
        Click me 
        </button>
        
        </div>
    )
}

export default Todos;