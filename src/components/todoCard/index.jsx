import { Button } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";

const TodoCard = ({todoText , isDone , id , todoList , setTodoList}) => {

    const handleDoneBtnClick = ()=>{
        const newTodoList = todoList.map(todo => {
            if(todo.id === id){
                return {...todo , isDone : true}
            }else{
                return todo
            }
        })
       setTodoList(newTodoList)
    }

    return(
        <div className="w-100 px-2 d-flex align-items-center justify-content-between">
            <p className={`m-0 ${isDone && 'text-decoration-line-through'}`}>{todoText}</p>
            <div className='d-flex align-items-center gap-2'>
            <Button onClick={handleDoneBtnClick} variant="outline-success">
                <BsCheckLg/>
            </Button>
            <Button onClick={()=> setTodoList(todoList.filter(todo => todo.id !== id))} variant="outline-danger">
                <IoMdClose/>
            </Button>
            </div>
        </div>
    )
}

export default TodoCard