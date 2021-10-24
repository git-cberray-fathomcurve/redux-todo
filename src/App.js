import React, { useState } from 'react';
//import logo from './public/mountains.png';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state=>state.todos);
  const handleClick= id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });
  if(!todos || !todos.length){
    return <p>NO TODOS</p>
  }
  return(
    <ul>
      {todos.map(todo=> <li onClick={()=>handleClick(todo.id)}>{todo.label}</li>)}
    </ul>
  )
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo]=useState();
  const handleChange = event => setNewTodo(event.target.value);
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload:{
      label: newTodo,
      id: Math.ceil(Math.random()*1000),
    }
  });

  return(
    <>
    <input value={ newTodo} onChange={handleChange} type="text" className='Entry' />
    <button onClick={handleClick} className='Button'>ADD TODO</button>
    </>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <p>TO DO List</p>
      </header>
      <div className='List'>
           <Todos />
      </div>
         <TodoInput />

    </div>
  );
}

export default App;
