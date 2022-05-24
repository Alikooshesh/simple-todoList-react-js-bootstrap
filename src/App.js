import './App.css';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import TodoCard from './components/todoCard';

function App() {
  return (
    <>
    <header className='pt-4'>
      <h1 className='w-100 text-center fs-1 fw'>Todo List</h1>
    </header>

    <main className='container'>
      <p className='fw'>Add Todo</p>
      <input className='w-100 p-2 border' placeholder='Add new Todo'/>
      <Button variant="primary" className='mt-2'>Submit</Button>

      <div className='w-100 mt-2 py-2 bg-white border'>
      <TodoCard isDone={true} todoText="test"/>
      </div>
    </main>
    </>
  );
}

export default App;
