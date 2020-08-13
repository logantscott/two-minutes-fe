import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AuthProvider from '../../Providers/AuthProvider';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
