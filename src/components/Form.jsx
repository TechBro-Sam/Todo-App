import { useState } from "react"
import './Form.css'
const Form = ({todos , setTodos}) =>{
    const [todo,setTodo]=useState({name:'',done:false})

    const handleSubmit = (e) => {
    e.preventDefault()
   setTodos([...todos, todo])
   setTodo({name:'',done:false})
        }
    return(
        <>
     
        <form onSubmit={handleSubmit} className="todo-form">
          <div className="container">
            <input placeholder="Enter Todo Item"   type="text" value={todo.name} onChange={(e)=>setTodo({name:e.target.value,done:false})} className="modern-input" />
            <button className="Input-btn"> Add</button>
        </div>
        </form>
        
                </>
    )
}
export default Form