import React from 'react';
import renderer from 'react-test-renderer';

import GoogleMap from '../components/GoogleMap';

it('correctly renders About component', () => {  
    const GoogleMapComponent = renderer.create(<GoogleMap />).toJSON();
    expect(GoogleMapComponent).toMatchSnapshot();
});