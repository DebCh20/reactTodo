import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Header from './Header';
import Todolist from './todolist';
import { useState } from 'react';

function App() {

  
  return (
    <div className='mainDiv'> 
    <Header></Header>    
    {/* <Signup></Signup>     */}
    <Todolist></Todolist>
    </div>
  );
}

export default App;
