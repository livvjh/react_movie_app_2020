import React from 'react';
import logo from './logo.svg';
import './App.css';

function Food({favorite}) {
  console.log({favorite});
  return (<h2>I like {favorite}</h2>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Food favorite="kimchi" />
          <Food favorite="ramen" />
          <Food favorite="oyster" />
          <Food favorite="bulgogi" />
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
