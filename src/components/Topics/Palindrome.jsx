import React, { Component } from "react"

class Palindrome extends Component {
  state={
    userInput: "",
    palindrome: ""
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  handleClick = () => {
    const {userInput} = this.state
    let isPalindrome;
    // const reverse = userInput.split('').reverse().join('')
    

    (userInput.split('').reverse().join('') === userInput) ? isPalindrome = true : isPalindrome = false;
    
    this.setState({palindrome: isPalindrome.toString()})
  }

  render() {
    
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
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
          Check
        </button>
        <span className="resultsBox">
          Palindrome:&nbsp;&nbsp;
           {this.state.palindrome}
        </span>
      </div>
    )
  }
}

export default Palindrome