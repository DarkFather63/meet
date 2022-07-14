import React, { Component } from "react";

class NumberofEvents extends Component {
  state = {
    numberOfEvents: this.props
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0) {
      this.setState({
        numberOfEvents: value,
        Error: ''
      });
    } else {
      this.setState({ Error: 'Please select a number greater than 0.' });
    }
  };

  render() {
    return <div className="numberOfEvents">
      <p>Number of Events:</p>
      <input className="number" type="number" min="1" max="100" value={this.state.numberOfEvents} onChange={this.handleInputChanged}>

      </input>


    </div>
  }
}

export default NumberofEvents;