import React, { Component } from "react";

class NumberofEvents extends Component {


  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0) {
      this.setState({
        numberOfEvents: value
      });
      this.props.updateNumberOfEvents(value);
    } else {
      this.setState({ Error: 'Please select a number greater than 0.' });
    }
  };

  render() {
    return <div className="event-count">
      <p>Number of Events:</p>
      <input className="number" type="number" min="1" max="100" value={this.props} onChange={this.handleInputChanged}>

      </input>


    </div>
  }
}

export default NumberofEvents;