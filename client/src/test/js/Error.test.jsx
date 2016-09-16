import React from 'react';
import {shallow} from 'enzyme';
import Error from 'components/error';
describe( 'Testing', () => {
    it( 'vendors import should work', () => {
        expect( React ).not.toBe( null );
    } );
    it( 'local import should exist', () => {
        expect( Error ).not.toBe( null );
    } );
    it( 'test enzyme', () => {
        const wrapper = shallow( <Error message="Hallo"/> );
        expect( wrapper ).not.toBe( null );
    } ),
            it( 'should be 2', () => {
                let sum = 1 + 1;
                expect( 2 ).toBe( 2 );
            } );
} );