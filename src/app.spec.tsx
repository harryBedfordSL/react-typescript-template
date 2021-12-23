import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';

describe('app', () => {
  it('should render without crashing', () => {
    const app = shallow(<App />);

    expect(app.length).toBe(1);
  });
});