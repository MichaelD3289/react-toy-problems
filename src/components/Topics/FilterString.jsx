import React, { Component } from "react"

class FilterString extends Component {

  state={
    unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
    userInput: "",
    filteredArray: []
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  handleClick = () => {
    const {unFilteredArray, userInput} = this.state
    console.log(unFilteredArray, userInput)
    this.setState({filteredArray: (unFilteredArray.includes(userInput)) ? userInput : ""})
  }


  render() {
    
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>

        <span 
        className="puzzleText"
        >
          {this.state.unFilteredArray.join(', ')}
        </span>

        <input 
        type="text" 
        className="inputLine" 
        onChange={this.handleChange}
        value={this.state.userInput}
        />

        <button 
        className="confirmationButton"
        onClick={this.handleClick}
        >
          Filter
        </button>

        <span 
        className="resultsBox filterStringRB">
          {this.state.filteredArray}
        </span>
      </div>
    )
  }
}

export default FilterString