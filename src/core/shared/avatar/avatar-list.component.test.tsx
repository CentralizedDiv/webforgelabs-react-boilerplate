import React from 'react';
import STAvatarList, { ISTAvatarListProps } from './avatar-list.component';
import { shallow } from 'enzyme';


describe('AvatarList', () => {
  const props: ISTAvatarListProps = {
    names: ['José', 'Maria', 'Ana'],
  };
  const component = shallow(<STAvatarList {...props} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});