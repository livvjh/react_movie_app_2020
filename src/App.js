import React from 'react';
import logo from './logo.svg';
import './App.css';


function Clubs({ name, picture }) {
  return (
    <div>
      <h1>I like { name }</h1>
      <img alt="emblem" src={ picture }/>
    </div>
  );
}

const clubs = [
  {
    name : "chelsea",
    image : "https://upload.wikimedia.org/wikipedia/ko/thumb/a/ae/Chelsea_FC_Logo.svg/1024px-Chelsea_FC_Logo.svg.png"
  },
  {
    name : "liverpool",
    image : "https://images-na.ssl-images-amazon.com/images/I/61H5-6IthRL._AC_SY606_.jpg"
  },
  {
    name : "arsenal",
    image : "https://worldsportlogos.com/wp-content/uploads/2018/02/Arsenal-Emblem.png"
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {clubs.map(item => (
          <Clubs name = {item.name} picture = {item.image}/>
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
