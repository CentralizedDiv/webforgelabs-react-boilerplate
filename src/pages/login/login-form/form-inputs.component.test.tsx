import React from 'react';
import FormInputs from './form-inputs.component';
import { shallow } from 'enzyme';

describe('Login Form Inputs', () => {
  const antdForm = { getFieldDecorator: jest.fn() };
  const props: any = {
    form: antdForm,
    password: '',
    remember: false,
    username: '',
  };
  const component = shallow(<FormInputs {...props} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});