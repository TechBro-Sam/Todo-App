import './TodoItem.css'
const TodoItem = ({item ,setTodos,todos}) => {
 
    const handleDelete = (item)=>{
    setTodos(todos.filter((todo) => todo !== item))
    } 
    const handleClick = (name)=>{
    const newArray = todos.map((todo)=>todo.name === name ? {...todo, done:!todo.done}:todo
    )
    setTodos(newArray)
    console.log(todos)
      }

    return(
        <div className='TodoItem'>
            <div className='item'>  
                 <h3 
                 onClick={ () => handleClick(item.name)}
                 className={item.done ? "complete":" "}
                 >
                    {item.name}
                    </h3>
                 <button 
                className='item-btn'
                onClick={()=>handleDelete(item)}>
                    Delete
                    </button>
                 </div>
         <hr className='line'/>
        </div>
    )
}
export default TodoItem