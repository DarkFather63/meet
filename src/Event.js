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

  render() {
    const { event } = this.props;
    return <div className="event">
      <h4 className="title">{event.summary}</h4>
      <p className="start-time">Starts: {event.start.dateTime}</p>
      <p className="details">{event.description}</p>

      <button className="btn" onClick={() => this.handleClick(this.state)}>{this.state.collapsed ? 'Show details' : 'Hide Details'}</button>


    </div>;
  }
}
export default Event;