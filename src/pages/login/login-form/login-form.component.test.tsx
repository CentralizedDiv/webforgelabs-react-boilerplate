import React from 'react';
import LoginForm from './login-form.component';
import { shallow } from 'enzyme';

describe('LoginForm', () => {
  const component = shallow(<LoginForm/>);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});