import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {


  render() {
    const { events, numberOfEvents } = this.props;

    return (
      <ul className='event-list'>
        {events.map(event =>
          <li key={event.id} length={numberOfEvents}>
            <Event event={event} />
          </li>
        )}

      </ul>
    );
  }
}

export default EventList;