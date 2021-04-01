import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      char: ""
    };
  }

  handleCharChange = event => {
    this.setState({
      char: event.target.value
    })
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleCharChange(event)}
            value={this.state.char}/>
        {this.props.maxChars - this.state.char.length}/{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
