import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event/> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('event has details to show', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  test('event has title', () => {
    expect(EventWrapper.find('.title')).toHaveLength(1);
  });

  test('renders event start time', () => {
    expect(EventWrapper.find('.start-time')).toHaveLength(1);
  });

  test('render hide/show button', () => {
    expect(EventWrapper.find('.btn')).toHaveLength(1);
  });

  test('event details collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('details expand when button is clicked', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.btn').simulate('click', { target: { collapsed: false } });
    expect(EventWrapper.state('collapsed')).toBe(false);
  });
})
