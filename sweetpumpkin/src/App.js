import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';
import Header from './header/Header';

class App extends Component {

  componentWillMount (){
    console.log('test')
  }
  render() {
    return (
      <div>  
        <Header />
        <Main />
      </div>
    ) 
  }
}

export default App;
