import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingCharacters: 0
    };
  }

  handleChange = (event) =>{

    let currentCharacters = event.target.value.length
    let remainingCharacters = 280 - currentCharacters


    this.setState({
      message:event.target.value,
      remainingCharacters: remainingCharacters
    })

    //debugger
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <h5>Characters left: {this.state.remainingCharacters}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
