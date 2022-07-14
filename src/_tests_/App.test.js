import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberofEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';
import { waitFor } from '@testing-library/react';

//unit tests
describe('<App/> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberofEvents component', () => {
    expect(AppWrapper.find(NumberofEvents)).toHaveLength(1);
  });

});


//integration tests
describe('<App/> integration', () => {

  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  //Having issues with Jest here - solved. Test library version 13 only works with react 18, downgraded to follow achievement. 
  // Also added waitFor() here - if it ever throws errors it may not be needed
  test('Get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await waitFor(() => { CitySearchWrapper.instance().handleItemClicked(selectedCity) });
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user clicks "See all cities" ', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });


  test('20 events is set as default', async () => {
    const AppWrapper = mount(<App />);
    const allEvents = await getEvents();
    expect(AppWrapper.state('numberOfEvents')).not.toEqual(undefined);
    const eventsLength = AppWrapper.state('numberOfEvents');
    expect(AppWrapper.state('events')).toEqual(allEvents.slice(0, eventsLength));
    AppWrapper.unmount();
  });

  test('Number of events is passed as prop by App to NumberOfEvents', async () => {
    const AppWrapper = mount(<App />);
    const AppNumberState = AppWrapper.state('numberOfEvents');
    expect(AppNumberState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberofEvents).props().numberOfEvents).toEqual(AppNumberState);
    AppWrapper.unmount();
  });


  test('Get list of events where length matches the number input', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
    const selectedNumber = 1;
    await NumberOfEventsWrapper.instance().handleInputChanged({
      target: { value: selectedNumber }
    });
    const eventsList = await getEvents();
    const eventsToShow = eventsList.slice(0, selectedNumber);
    AppWrapper.setState({ events: eventsToShow });
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    expect(AppWrapper.state('events')).not.toEqual(undefined);
    expect(AppWrapper.state('events')).toHaveLength(selectedNumber);
    AppWrapper.unmount();
  });

  test('Input in number of events and city search updates events list state in App', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const location = extractLocations(mockData)[0];
    await CitySearchWrapper.instance().handleItemClicked(location);
    const selectedNumber = 1;
    await NumberOfEventsWrapper.instance().handleInputChanged({
      target: { value: selectedNumber }
    });
    AppWrapper.setState({ location: location });
    expect(AppWrapper.state('events')).not.toEqual(undefined);
    expect(AppWrapper.state('events')).toHaveLength(selectedNumber);
    AppWrapper.unmount();
  });


});