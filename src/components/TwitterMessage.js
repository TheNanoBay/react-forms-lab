import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) =>{


    this.setState({
      message:event.target.value
    })

    //debugger
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <h5>Characters left: {charNumber}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
