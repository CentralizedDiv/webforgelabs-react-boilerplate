import React from 'react';
import STAvatar from './avatar.component';
import { shallow } from 'enzyme';

describe('STAvatar', () => {
  const component = shallow(<STAvatar/>);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});