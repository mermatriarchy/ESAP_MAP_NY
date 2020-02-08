import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';

Enzyme.configure({ adapter: new Adapter()});

it('correctly renders the top-level App component', () => {  
    const AppComponent = shallow(<App />);
    expect(AppComponent).toMatchSnapshot();
});