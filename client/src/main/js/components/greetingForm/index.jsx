import React, {Component, PropTypes} from 'react'
import {connect, PromiseState} from 'react-refetch'

class GreetingForm extends React.Component {

    static contextTypes = {
        url: PropTypes.string.isRequired
    }

    render() {

        return (<div>
            Greet
            <input id="name" type="text" name="greeting" defaultValue="Marcel"/>
            <button onClick={() => this.handleClick()}>Greet!</button>
        </div>)
    }

    handleClick() {
        var name = document.getElementById( "name" ).value;
        console.log( name );
        this.props.greet( name )
    }


}

export default connect( ( props, context ) => {
    return {
        greet: name => ({
            greetResponse: {
                url: `${context.url}/greeting`,
                method: 'POST',
                body: name
            }
        })
    }
} )( GreetingForm )

