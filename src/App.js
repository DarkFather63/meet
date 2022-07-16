import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberOfEvents';
import './nprogress.css';
import { extractLocations, getEvents } from './api';

//add numberOfEvents state here once testing for numberofevents component is complete
class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 20
  }

  updateEvents = (
    location,
    eventCount = this.state.numberOfEvents
  ) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      const eventCountFilter = eventCount > locationEvents.length
        ? locationEvents
        : locationEvents.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          numberOfEvents: eventCountFilter
        });
      }
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (value) => {
    this.setState({
      numberOfEvents: value
    });
    this.updateEvents(this.state.locations, this.state.numberOfEvents);
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberofEvents updateNumberOfEvents={this.updateNumberOfEvents} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
