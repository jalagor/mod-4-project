import React, { Component } from 'react';
import './App.css';

class App extends Component{
 
  componentDidmount= () => {
     const canvas = this.refs.tetris
     const context = canvas.getContext("2d")
     context.fillStyle = '#000'
     context.fillRect(0, 0, canvas.width, canvas.height)
      
  }
  
  //comment comment
  render(){
    return (
        <div id="board">
            <canvas ref="tetris" width="240" height="400"></canvas>
        </div>
    )
  }
}

export default App;
