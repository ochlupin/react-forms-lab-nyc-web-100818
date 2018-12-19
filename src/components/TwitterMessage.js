import React from "react";

class TwitterMessage extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    console.log("State is being changed. Setting new state");
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="value"
          value={this.state.value}
        />
        <br />
        {/* mixing props and state ==> noice */}
        Remaining Characters: {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
