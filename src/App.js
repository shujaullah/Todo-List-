import logo from './logo.svg';
import './App.css';
import Header from './MyVomponents/Header';
import Footer from './MyVomponents/Footer';
import Todos from './MyVomponents/Todos';
import AddTodo from './MyVomponents/AddTodo';
import React, { useState, useEffect } from 'react';
function App() {
  let initTodo
  if(localStorage.getItem('todos')===null)
    initTodo = []
  else
    initTodo = JSON.parse(localStorage.getItem('todos'))  


  const onDelete = (todo)=> {
    console.log("Iam onDelete of ", todo)
    setTodos(todos.filter((e)=>{
      return e!== todo
    }))
    //putting the data in the local storage. 
    localStorage.setItem('todos', JSON.stringify(todos))
  }


  const addTodo = (title, desc)=>{
    console.log("iam doinhg title and desc")
    let sno;
    if(todos.length ===0)
       sno = 1;
    else  
      sno = todos[(todos.length-1)].sno +1;
    let myTodo = {
      sno: sno,
      title:title,
      desc:desc
    }
    // adding the new memebr in the todos
    setTodos([...todos, myTodo])
    
   

    
      //localStorage.setItem('todos', JSON.stringify(todos))
    
    console.log("iam doinhg title and desc", myTodo)
  }



  //here using the State hook inorder to set the array and update the array of element is deleted in the delete method.
  const [todos, setTodos] = useState (initTodo)//[ 
    // {
    //   sno:1,
    //   title: "Go to the market",
    //   desc: "You need to go to market to get this job done."
    // },
    // {
    //   sno:2,
    //   title: "Go to the school",
    //   desc: "You need to go to market to school"
    // },
    // {
    //   sno:3,
    //   title: "Go to the home",
    //   desc: "You need to go to home right now."
    // }
 // ]);
  useEffect (()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  console.log(todos)
  return (
    <>
    
      <Header title ="My Todos List" searchBar = {false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
