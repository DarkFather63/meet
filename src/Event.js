import React, { Component } from "react";
import './App.css'

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = (state) => {
    this.setState({
      collapsed: !state.collapsed
    });
    const coll = document.getElementsByClassName('display');
    Array.from(coll).forEach((x) => {
      if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
      }
    })

  }

  //Add css to element to hide/display event details
  render() {
    const { event } = this.props;
    return <div className="event">
      <h4 className="title">{event.summary}</h4>
      <p className="start-time">Starts: {event.start.dateTime}</p>
      <p className="location">Where: {event.location}</p>

      <button className="btn" onClick={() => this.handleClick(this.state)}>{this.state.collapsed ? 'Hide details' : 'Show Details'}</button>
      {this.state.collapsed && (
        <div className="display">
          <p className="details">{event.description}</p>
          <p></p>
        </div>
      )}
    </div>;
  }
};

export default Event;