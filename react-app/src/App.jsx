import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [todos]= useState(["todo1","todo 2"])
  return (
    <div className="App"> 
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {todos.map((v,index) => <li key={index}>{v}</li>)}
    </div>
  );
}

export default App;
