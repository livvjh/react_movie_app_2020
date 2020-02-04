import React from 'react';
import logo from './logo.svg';
import './App.css';


function Clubs({ name }) {
  return <h1>I like {name}</h1>;
}

const clubs = [
  {
    name : "chelsea",
    image : "/Users/leejihwan/Downloads/images.png"
  },
  {
    name : "liverpool",
    image : "/Users/leejihwan/Downloads/61H5-6IthRL._AC_SY606_.jpg"
  },
  {
    name : "arsenal",
    image : "/Users/leejihwan/Downloads/Arsenal-logo.png"
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {clubs.map(dish => (
          <Clubs name = {dish.name} />
        ))} 
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
