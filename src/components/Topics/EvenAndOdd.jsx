import React, { Component } from "react"

class EvenAndOdd extends Component {

  state = {
    evenArray: [],
    oddArray: [],
    userInput: ""
  }



  updateInput = (e) => {
    this.setState({userInput: e.target.value})
  }

  handleClick = () => {
  const splitArray =  this.state.userInput.split(',')
  console.log(splitArray)
  
   splitArray.forEach(num => {

    return (num % 2 === 0) 
      ? 
      this.setState(prevState => ({evenArray: [...prevState.evenArray, num]}))
      : 
      this.setState(prevState => ({oddArray: [...prevState.oddArray, num]}))
    })
  
  }



  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input 
          className="inputLine"
          type="text"
          onChange={this.updateInput}
          value={this.state.userInput}
          />
        <button 
        className="confirmationButton"
        onClick={this.handleClick}
        >Split
        </button>
        <span className="resultsBox">Evens: [{this.state.evenArray.join(', ')}]</span>
        <span className="resultsBox">Odds: [{this.state.oddArray.join(', ')}]</span>
      </div>
    )
  }
}

export default EvenAndOdd