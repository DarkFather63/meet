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


  test('20 events is set as state default', async () => {
    const AppWrapper = mount(<App />);
    expect(AppWrapper.state('numberOfEvents')).toBe(20);
    AppWrapper.unmount();
  });

  test('Number of events is passed as prop by App to NumberOfEvents', async () => {
    const AppWrapper = mount(<App />);
    const AppNumberState = AppWrapper.state('numberOfEvents');
    expect(AppNumberState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberofEvents).props().numberOfEvents).toEqual(AppNumberState);
    AppWrapper.unmount();
  });

  test('State of numberOfEvents in App changes when input is changed', async () => {
    const AppWrapper = mount(<App />);
    const numberInput = AppWrapper.find(NumberofEvents).find('.number');
    const eventObject = { target: { value: 10 } };
    numberInput.at(0).simulate('change', eventObject);
    expect(AppWrapper.state('numberOfEvents')).toBe(10);
    AppWrapper.unmount();
  });

  test('EventList lists events at length no longer than the state of numberOfEvents in App', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ 'numberOfEvents': 1 });
    await getEvents();
    expect(AppWrapper.state('events')).toHaveLength(1);
    AppWrapper.unmount();
  });

  test('When the specified number of events is greater than the number of available events, all events show', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ 'numberOfEvents': 30 });
    await getEvents();
    expect(AppWrapper.state('events')).toHaveLength(2);
    AppWrapper.unmount();
  });


  test('Get list of events matching length to number selected by user', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
    const eventObject = { target: { value: 1 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    await getEvents();
    await NumberOfEventsWrapper.instance().handleInputChanged(eventObject);
    await AppWrapper.instance().updateEvents();
    const EventListWrapper = AppWrapper.find(EventList);
    //This is where I'm stuck - I don't know how to slice the rendered list or connect the updated state?
    expect(AppWrapper.state('events')).toEqual(1);
    expect(AppWrapper.state('numberOfEvents')).toBe(1);
    AppWrapper.unmount();
  });



});