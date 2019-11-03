import React from 'react';
import LoginBackground from './login-background.component';

describe('LoginBackground', () => {
  const component = <LoginBackground/>;

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});