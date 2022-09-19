import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Score from './score.js'
class App extends React.Component{
  state={
    score:0,
    overs:0,
  }
  render(){
    return (
      <div className="App">
        <center>
        <h1>Cricket ScoreBoard</h1>
        <Score />
        </center>
      </div>
    );

  }
}

export default App;
