import React, {Component, PropTypes} from 'react'
import {connect, PromiseState} from 'react-refetch'

export default class GreetingForm extends React.Component {

    render() {

        return (<div>
            Greet
            <input id="name" type="text" name="greeting" defaultValue="Marcel"/>
            <button onClick={() => this.click()}>Greet!</button>
        </div>)
    }

    click() {
        const {refresh, greet} = this.props;
        var name = document.getElementById( "name" ).value;
        console.log( name );
        greet( name )
        refresh()
    }


}

