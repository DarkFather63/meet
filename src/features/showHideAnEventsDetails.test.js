import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from "../Event";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user hasn\'t clicked any button', () => {

    });
    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the events elements should be collapsed by default', () => {
      AppWrapper.update();
      const EventWrapper = AppWrapper.find(Event);
      expect(EventWrapper.find('.event_details')).toEqual({});
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);

    });

    when('the user clicks the show details button', () => {
      AppWrapper.update();
      const EventWrapper = AppWrapper.find(Event);
      EventWrapper.find('button').at(0).simulate('click');
    });

    then('the events element should expand and show details', () => {
      const EventWrapper = AppWrapper.find(Event);
      expect(EventWrapper.find('.event')).toBeDefined();
    });
  });


  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the event element is expanded', () => {
      AppWrapper = mount(<App />);
      const EventWrapper = AppWrapper.find(Event);
      expect(EventWrapper.find('.event')).toBeDefined();
    });

    when('the user clicks the hide details button', () => {
      AppWrapper.update();
      const EventWrapper = AppWrapper.find(Event);
      EventWrapper.find('button').at(0).simulate('click');
    });

    then('the events element should collapse', () => {
      const EventWrapper = AppWrapper.find(Event);
      expect(EventWrapper.find('.event_details')).toEqual({});
    });
  });
})