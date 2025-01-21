import { useState } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber} from './actions/index';
function App() {
   const myState = useSelector((state) => state.changetheNumber);
   const dispatch = useDispatch();
  return (
    <>
     <div className="container"> 
       <h2>Increment/Decrement Counter</h2>
       <h4>Using react and redux</h4>
       <div className="quantity">
        <a className='quantity_minus' title='Decrement'onClick= { () => dispatch(decNumber()) }><span> - </span></a>
       <input type="text" name=' quantity' className='quantity_input' value = {myState}/>
        <a className='quantity_plus' title='Increment' onClick= { () => dispatch(incNumber(2)) }><span> + </span></a>
       </div>

     </div>
          
    </>
  )
}

export default App
