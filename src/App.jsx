import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter.'
import {Team} from "./Team"
import {Users} from "./User"
import {Friends} from "./Friends"

function App() {
  const handleClick = () =>{
    alert('Button Clicked');
  }
  const handleClick2 = () =>{
    alert('Button 2 Clicked');
  }

  const addtoFive = (num) => {
    alert(num+5);
  }
  
  return (
    <>
      
      <h3>React Core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third click')}}>Third Button</button>
      <button onClick={()=> addtoFive(3)}>Adder</button>
      
    </>
  )
}

export default App
