import React from 'react';
import { ILoginProps, Login } from './login.container';
import { shallow } from 'enzyme';


describe('Login', () => {
  const mockHistory: any = {
    history: jest.fn(),
    location: jest.fn(),
    match: jest.fn(),
  };

  const props: ILoginProps = {
    ...mockHistory,
    LoginRequest: jest.fn(),
    error: '',
    isLoading: false,
    isLogged: false,
    user: {},
  };
  const component = shallow(<Login {...props} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});