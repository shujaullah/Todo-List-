import React from 'react'

export default function Footer() {
  // thats how you can add styling in the react. 
  let footeStyle = {
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    <div className='bg-dark text-light py-3'style = {footeStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>
    </div>
  )
}
