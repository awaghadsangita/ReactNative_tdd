import React from 'react';
import { Text } from 'react-native'; 
import { shallow } from 'enzyme';
import App from '../../App';
import renderer from 'react-test-renderer';
describe('Text', () => {
    it('renders text', () => {
        const wrapper = shallow(<Text>Hello, world!</Text>);
        expect(wrapper.text()).toEqual('Hello, world!');
   });

   it('Snapshot Testing',()=>{
       const snap=renderer.create(<App/>).toJSON();
       expect(snap).toMatchSnapshot();
   })
 });

