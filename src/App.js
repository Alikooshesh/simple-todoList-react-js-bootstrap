import './App.css';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import TodoCard from './components/todoCard';
import {useState } from 'react';

function App() {

  const [todoInputValue , setTodoInputValue] = useState("salam")

  const [todoList , setTodoList] = useState([])

  const handleTodoInputChage = (e) =>{
    setTodoInputValue(e.target.value)
  }

  const handleSubmitBtnClick = (todoText) => {
    setTodoList([...todoList , {todoText , isDone : false , id : Date.now()}])
  }

  return (
    <>
    <header className='pt-4'>
      <h1 className='w-100 text-center fs-1 fw'>Todo List</h1>
    </header>

    <main className='container'>
      <p className='fw'>Add Todo</p>
      {console.log(todoList)}
      <input onChange={(e)=>handleTodoInputChage(e)} value={todoInputValue} className='w-100 p-2 border' placeholder='Add new Todo'/>
      
      <Button onClick={() => handleSubmitBtnClick(todoInputValue)} variant="primary" className='mt-2'>Submit</Button>

      <div className='w-100 mt-2 py-2 bg-white border d-flex flex-column gap-3'>
        {todoList.map(todo => {
          return <TodoCard 
          key={todo.id} 
          isDone={todo.isDone} 
          todoText={todo.todoText} 
          id={todo.id} 
          todoList={todoList} 
          setTodoList={setTodoList}/>
        })}
      </div>
    </main>
    </>
  );
}

export default App;
