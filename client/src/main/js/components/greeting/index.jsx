import React from "react";
import {ListGroupItem} from "react-bootstrap";

export default class Greeting extends React.Component {

    render() {

        return (
                <div className="greeting-list">
                    <ListGroupItem >{this.props.greeting.content}
                        <button onClick={() => this.handleDelete()}>X</button>
                    </ListGroupItem>
                </div>
        )
    }

    handleDelete() {
        this.props.onDelete( this.props.greeting.id );
    }
}