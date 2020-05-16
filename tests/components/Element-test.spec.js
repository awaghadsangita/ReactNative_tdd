import 'react-native';
import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

describe('Testing for Find Element in App Component',()=>{
    let findElement=function(tree,element){
        console.warn(tree.children);
        let result=undefined;
        for(node in tree.children){
            if(tree.children[node].props.testID==element){
                result=true;
            }
        }
        return result;
    }
    it('find Element',()=>{   
        let tree=renderer.create(<App/>).toJSON();
        expect(findElement(tree,'username')).toBeDefined();
    })
})