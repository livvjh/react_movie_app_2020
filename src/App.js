import React from 'react';
import './App.css';
// import PropTypes from "prop-types";

class App extends React.Component {
    state = {
      count : 0
    }  

    add = () => {
      this.setState({count : this.state.count + 1})
      // this.setState(current => ({ count : current.count + 1 }))
    }
    remove = () => {
      this.setState(current => ({ count : current.count - 1 }))
    }

    render() {
      return (
        <div>
          <h1>the number is : {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.remove}>Remove</button>
        </div>
      )
    }
}

export default App;
