import React from 'react';
import { shallow } from 'enzyme';
import NumberofEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberofEvents />)
  })

  test('renders number textbox', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render number in input to be 20 by default', () => {
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toEqual(20);
  });

  test('user can change number of events shown', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 20
    });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });

  test('only numbers > 0 allowed', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 10
    });
    const eventObject = { target: { value: -2 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });

});

describe('<NumberOfEvents/> integration',)