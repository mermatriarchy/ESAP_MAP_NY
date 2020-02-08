import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from '../components/common/NavBar';

it('correctly renders About component', () => {  
    const NavBarComponent = renderer.create(<NavBar />).toJSON();
    expect(NavBarComponent).toMatchSnapshot();
});