import React from "react";
import {ListGroup} from 'react-bootstrap';
import Greeting from "../greeting";

export default class GreetingList extends React.Component {

    render() {
        const {greetings} = this.props;
        return <ListGroup componentClass="ul">
            {greetings.map( greeting => <Greeting key={greeting.id} greeting={greeting} onDelete={this.props.onDelete}/>
            )}

        </ListGroup>
    }
}