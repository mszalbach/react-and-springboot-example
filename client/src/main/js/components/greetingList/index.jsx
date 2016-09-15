import React from "react";
import Greeting from "../greeting";

export default class GreetingList extends React.Component {

    render() {
        const {greetings} = this.props;
        return <ul>
            {greetings.map( greeting => <Greeting key={greeting.id} greeting={greeting} onDelete={this.props.onDelete}/>
            )}

        </ul>
    }
}