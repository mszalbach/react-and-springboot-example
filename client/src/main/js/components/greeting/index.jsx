import React from "react";

export default class Greeting extends React.Component {

    render() {

        return (
                <li>{this.props.greeting.content}
                    <button onClick={() => this.handleDelete()}>X</button>
                </li>
        )
    }

    handleDelete() {
        this.props.onDelete( this.props.greeting.id );
    }
}