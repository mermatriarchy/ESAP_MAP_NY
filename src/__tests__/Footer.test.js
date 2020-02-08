import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../components/common/Footer';

it('correctly renders About component', () => {  
    const FooterComponent = renderer.create(<Footer />).toJSON();
    expect(FooterComponent).toMatchSnapshot();
});