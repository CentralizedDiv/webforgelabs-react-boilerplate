import React from 'react';
import { IMenuProps, STMenu } from './menu.component';
import { shallow } from 'enzyme';

describe('STMenu', () => {
  const props: IMenuProps = {
    SetCurrentLocation: jest.fn(),
    currentPath: 'company',
    selectedCompany: 'test',
    selectedProperty: 'soinco',
    collapsed: true,
    allCompanies: [],
  };

  const component = shallow(<STMenu {...props} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
