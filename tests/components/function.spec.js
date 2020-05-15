import 'react-native';
import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

describe('testing change function and state',()=>{
    it('should return 20',()=>{
        let AppData=renderer.create(<App/>).getInstance();
        AppData.change(2)
        expect(AppData.state.data).toEqual(20);
    })
   
})