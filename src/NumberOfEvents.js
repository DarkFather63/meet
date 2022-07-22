import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberofEvents extends Component {


  handleInputChanged = (event) => {
    const selectedValue = parseInt(event.target.value);
    if (selectedValue > 20 || selectedValue < 0) {
      return this.setState({
        numberOfEvents: 20,
        errorText: 'Please select a number between 0 and 20.'
      });
    } else if (selectedValue <= 20 && selectedValue > 0) {
      return this.setState({
        numberOfEvents: selectedValue,
        errorText: ''
      })
    }
    this.props.updateEvents(undefined, selectedValue);
  };

  render() {
    const { numberOfEvents } = this.props;
    return <div className="event-count">
      <p>Number of Events:</p>
      <ErrorAlert text={this.state.errorText} />
      <input className="event-number" type="number" min="1" max="100" value={numberOfEvents} onChange={this.handleInputChanged}>

      </input>


    </div>
  }
}

export default NumberofEvents;