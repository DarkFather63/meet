import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  // state = {
  //   eventCount: undefined
  // }

  render() {
    const { events, numberOfEvents } = this.props;

    return (
      <ul className='event-list'>
        {events.map(event =>
          <li key={event.id} length={numberOfEvents}>
            <Event event={event} />
          </li>,
          console.log(li.length)
        )}

      </ul>
    );
  }
}

export default EventList;