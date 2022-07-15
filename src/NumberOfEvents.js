import React, { Component } from "react";

class NumberofEvents extends Component {


  handleInputChanged = (event) => {
    this.setState({
      numberOfEvents: event.target.value
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return <div className="event-count">
      <p>Number of Events:</p>
      <input className="number" type="number" min="1" max="100" value={this.props.state} onChange={this.handleInputChanged}>

      </input>


    </div>
  }
}

export default NumberofEvents;