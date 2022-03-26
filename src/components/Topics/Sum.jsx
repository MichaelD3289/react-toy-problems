import React, { Component } from "react"

class Sum extends Component {
  state={
    number1: 0,
    number2: 0,
    sum: null
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = () => {
    const {number1: num1, number2: num2} = this.state
    this.setState({sum: (+num1 + +num2)})
  }

  render() {
    const {number1, number2, sum} = this.state
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input 
        type="number" 
        className="inputLine"
        name="number1"
        onChange={this.handleInput}
        value={(number1) ? number1 : ""}
        />
        <input 
        type="number" 
        className="inputLine"
        name="number2"
        onChange={this.handleInput}
        value={(number2) ? number2 : ""}
        />
        <button 
        className="confirmationButton"
        onClick={this.handleClick}
        >Add</button>
        <span className="resultsBox">
          Sum:&nbsp;
          {sum}
        </span>
      </div>
    )
  }
}

export default Sum