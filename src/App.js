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
    numberOfEvents
  ) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      const eventCount = (numberOfEvents === this.state.numberOfEvents)
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events), numberOfEvents: 20 });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberofEvents numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
