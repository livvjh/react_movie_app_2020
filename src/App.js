import React from 'react';
import './App.css';
// import PropTypes from "prop-types";

class App extends React.Component {
    state = {
      count : 0,
      date : new Date()
    }  

    add = () => {
      // this.setState({count : this.state.count + 1})
      this.setState(current => ({ count : current.count + 1 }))
    }
    remove = () => {
      this.setState(current => ({ count : current.count - 1 }))
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), 1000
      )
    }

    tick() {
      this.setState({
        date : new Date()
      })
    }

    render() {
      return (
        <div>
          <h1>It is { this.state.date.toLocaleTimeString() } </h1>
          <h2>the number is : {this.state.count}</h2>
          <button onClick={this.add}>Add</button>
          <button onClick={this.remove}>Remove</button>
        </div>
      )
    }
}

export default App;
