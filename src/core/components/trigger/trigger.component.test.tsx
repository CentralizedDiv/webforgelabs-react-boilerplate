import React from 'react';
import STTrigger from './trigger.component';
import { shallow } from 'enzyme';

describe('STTrigger', () => {
  const mockOnClick = jest.fn();

  const collapsed = true;
  const component = shallow(<STTrigger onClick={mockOnClick} collapsed={collapsed}/>);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call onClick method when clicked', () => {
    component.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

});