import './Footer.css'
const Footer = ({completedTodos ,totalTodos}) => {
return(
<>
<div className="footer">
 <h1 className='iteme'>Completed Items : {completedTodos}</h1>   
 <h1 className='iteme'>Total Todos : {totalTodos}</h1>   
</div>

</>)
}
export default Footer;