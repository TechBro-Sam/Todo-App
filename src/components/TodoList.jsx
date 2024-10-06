import TodoItem from "./TodoItem"
import './TodoLIst.css'
const TodoList = ({todos,setTodos,sortedTodos}) => {
    return (
        <div className="list">
         {sortedTodos.map((item,index)=>(
           <TodoItem 
           item={item}
           key={item.name}
           todos={todos}
            setTodos ={setTodos}/>
            ))}
        </div>
    )
}
export default TodoList