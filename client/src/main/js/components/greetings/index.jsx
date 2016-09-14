import React, {PropTypes} from "react";
import client from "rest";
import GreetingList from "../greetingList";
import GreetingForm from "../greetingForm";


const url = "http://localhost:8081";

export default class Greetings extends React.Component {


    constructor( props ) {
        super( props );
        this.state = {greetings: []};
    }

    componentDidMount() {
        this.loadFromServer()
    }

    loadFromServer() {
        client( {method: 'GET', path: url + '/greetings'} ).then( response => {
            this.setState( {greetings: JSON.parse( response.entity )} );
        } );
    }

    greet( greeting ) {
        client( {
                    method: 'POST',
                    path: url + '/greeting',
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