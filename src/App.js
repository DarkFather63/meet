import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberOfEvents';
import './nprogress.css';
import { extractLocations, getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    selectedLocation: 'all',
    numberOfEvents: 20
  }


  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
    if (navigator.onLine) {
      this.setState({
        offlineText: ''
      });
    } else {
      this.setState({
        offlineText: 'You are offline. Only cached results loaded.'
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }



  updateEvents = (
    location,
    eventCount
  ) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: eventCount })
    )
    if (location === undefined) {
      location = this.state.selectedLocation
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount,
          selectedLocation: location
        });
      }
    });
  }





  render() {
    return (

      <div className="App">
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberofEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <OfflineAlert text={this.state.offlineText} />
        <EventList events={this.state.events} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
