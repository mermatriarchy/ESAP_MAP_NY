import React from 'react';
import renderer from 'react-test-renderer';

import About from '../components/About';

it('correctly renders About component', () => {  
    const AboutComponent = renderer.create(<About />).toJSON();
    expect(AboutComponent).toMatchSnapshot();
});