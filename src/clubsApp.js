import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";

const clubs = [
  { id : 1,
    name : "chelsea",
    image : "https://contents.sixshop.com/uploadedFiles/50779/product/image_1553506302388.png",
    rating : 4.7
  },
  { id : 2,
    name : "liverpool",
    image : "https://pluspng.com/img-png/logo-liverpool-fc-png-liverpool-fc-logo-500.png",
    rating : 4.3
  },
  { id : 3,
    name : "arsenal",
    image : "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f6f6ff17697607.562d457a42963.png",
    rating : 2.8
  }
]

function Clubs({ name, picture, rating }) {
  return (
    <div>
      <h1>I like { name }</h1>
      <h4>{ rating } / 5</h4>
      <img alt={ name } src={ picture }/>
    </div>
  );
}

Clubs.protoTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {clubs.map(item => (
          <Clubs 
            key={item.id} 
            name={item.name} 
            picture={item.image} 
            rating={item.rating}
          />
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
