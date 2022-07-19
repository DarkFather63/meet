import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = (state) => {
    this.setState({
      collapsed: !state.collapsed
    });
  }

  //Add css to element to hide/display event details
  render() {
    const { event } = this.props;
    return <div className="event">
      <h4 className="title">{event.summary}</h4>
      <p className="start-time">Starts: {event.start.dateTime}</p>
      <p className="location">Where: {event.location}</p>

      <button className="btn" onClick={() => this.handleClick(this.state)}>{this.state.collapsed ? 'Show details' : 'Hide Details'}</button>
      {this.state.collapsed && (
        <div className="event_details">
          <p className="details">{event.description}</p>
        </div>
      )}
    </div>;
  }
};

export default Event;