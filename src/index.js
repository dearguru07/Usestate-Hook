import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const StateHook=()=>{
  const [a,seta]=useState(0)
  return <div>
    <center>
      <h1>--------Usestate Hook--------</h1>
    <h2>Counter app</h2>
    <h4>{a}</h4>
    <button onClick={()=>{
      seta(a+1)
    }}>Increase</button>
    <button onClick={()=>{
      seta(a-1)
    }}>Decrease</button>
    </center>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StateHook/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
