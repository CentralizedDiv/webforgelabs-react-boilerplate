import React from 'react';
import { App, IAppProps } from './app';
import { shallow } from 'enzyme';

describe('App', () => {
  const props: IAppProps = {
    history: undefined,
    showHeader: false,
    showSider: false,
  };
  const component = shallow(<App {...props} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

});