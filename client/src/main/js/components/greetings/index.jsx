import React, {PropTypes} from "react";
import client from "../../utils/client";
import GreetingList from "../greetingList";
import GreetingForm from "../greetingForm";

export default class Greetings extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {greetings: []};
    }

    componentDidMount() {
        this.loadFromServer()
    }

    loadFromServer() {
        client( {method: 'GET', path: '/greetings'} ).then( response => {
            this.setState( {greetings: response.entity} );
        } );
    }

    greet( greeting ) {
        client( {
                    method: 'POST',
                    path: '/greeting',
                    entity: greeting
                } )
        this.loadFromServer()
    }


    render() {
        return (<div>
            <GreetingForm greeting="Marcel" greet={( greeting ) => this.greet( greeting )}/>
            <GreetingList greetings={this.state.greetings}/>
        </div> )


    }

}