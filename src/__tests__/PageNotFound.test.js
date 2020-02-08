import React from 'react';
import renderer from 'react-test-renderer';

import PageNotFound from '../components/PageNotFound';

it('correctly renders About component', () => {  
    const PageNotFoundComponent = renderer.create(<PageNotFound />).toJSON();
    expect(PageNotFoundComponent).toMatchSnapshot();
});