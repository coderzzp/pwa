import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    fetch('https://www.apiopen.top/satinApi?type=1&page=1')
      .then(res=>{
        res.json().then(({data})=>this.setState({data:data[0].text}))
      })
      
  }
  state = {
    data:''
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.data}
      </div>
    );
  }
}

export default App;
