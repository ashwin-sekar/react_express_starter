import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [connected, setConnected] = useState('');

  useEffect(() => {
    const start = async () => {
      const connect = await fetch('/api');
      const response = await connect.json();
      if(response) {
        setConnected(response);
        console.log(response);
      }
    }

    start();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
