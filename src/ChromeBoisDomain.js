import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => { return drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleClick = (event) => { return toggleCycling()}
  
  handleKeyPress = (event) => { 
     if (event.key === 'a'){
      return resize('+')
     }
     if (event.key === 's'){
      return resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
