import React, { Component } from "react";

class FilterObject extends Component {
  state = {
    unFilteredArray: [
      {
        name: "Jimmy Joe",
        title: "Hack0r",
        age: 12,
      },
      {
        name: "Jeremy Schrader",
        age: 24,
        hairColor: "brown",
      },
      {
        name: "Carly Armstrong",
        title: "CEO",
      },
    ],
    userInput: "",
    filteredArray: [],
  };

  inputChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  handleClick = () => {
    this.setState(prevState => {
      const {unFilteredArray} = prevState
      console.log(unFilteredArray)
      console.log(this.state.userInput)
      return {filteredArray: unFilteredArray.filter((e, i) => e.hasOwnProperty(this.state.userInput))}
    })
  }

  render() {


    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: 
         {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input 
          type="text" 
          className="inputLine"
          onChange={this.inputChange}
          value={this.state.userInput}
         />
        <button 
          className="confirmationButton"
          onClick={this.handleClick}
        >Filter
        </button>

        <span 
        className="resultsBox filterObjectRB"
        > Filtered: 
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
