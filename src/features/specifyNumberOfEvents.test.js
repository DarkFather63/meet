import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from "../Event";
import EventList from "../EventList";
import NumberofEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('Number of Events is set to 20 as default', ({ given, when, then }) => {
    given('the user hasn\'t clicked any button', () => {

    });
    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the number of events should be 20 by default', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(20);
    });
  });

  test('User can select a number between 1-100', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user starts entering a number in the number textbox', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
      NumberOfEventsWrapper.find('input').simulate('change', { target: { value: 1 } });
    });

    then('the user should receive a list the length of the number they select', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
      NumberOfEventsWrapper.find('input').simulate('change', { target: { value: 1 } });
      const EventListWrapper = AppWrapper.find(EventList);
      expect(EventListWrapper.find('.event-list li')).toHaveLength(1);

    });
  });
})