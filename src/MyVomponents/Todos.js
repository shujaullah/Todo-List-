import React from 'react'
import {TodoItem} from "../MyVomponents/TodoItem";
export default function Todos(props) {
  let arr = []
  // redering the todos item by using the for loop. 

  for(let i =0; i < props.todos.length; i++)
        arr[i]= <TodoItem todo= {props.todos[i]} onDelete= {props.onDelete} />
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ?"There is no todos to display." : arr }
    
      
    </div>
  )
}
