import { Button } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";

const TodoCard = ({todoText , isDone}) => {
    return(
        <div className="w-100 px-2 d-flex align-items-center justify-content-between">
            <p className={`m-0 ${isDone && 'text-decoration-line-through'}`}>{todoText}</p>
            <div className='d-flex align-items-center gap-2'>
            <Button variant="outline-success">
                <BsCheckLg/>
            </Button>
            <Button variant="outline-danger">
                <IoMdClose/>
            </Button>
            </div>
        </div>
    )
}

export default TodoCard