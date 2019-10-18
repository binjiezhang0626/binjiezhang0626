import React from 'react';
import './App.css';
import Img from './img'
import BigImg from './bigImg'
import Navigation from './navigation';

class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="App">
        <div className="Screen">
          <div className="left">
            <button></button>
          </div>
          <BigImg />
          <div className="right">
            <button></button>
          </div>
        </div>
        <Navigation />
      </div>
      
    )
  }
}


export default App;
