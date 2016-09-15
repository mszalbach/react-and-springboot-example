import React from "react";
import {FormGroup, FormControl, Form, Button} from "react-bootstrap";

export default class GreetingForm extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {greeting: props.greeting};
    }

    render() {

        return (
                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder={this.state.greeting}
                                     onChange={( event ) => this.handleChange( event )}/>
                    </FormGroup>
                    {' '}
                    <Button onClick={() => this.click()}>Greet!</Button>
                </Form>)
    }

    handleChange( event ) {
        event.preventDefault();
        this.setState( {greeting: event.target.value} );
    }

    click() {
        this.props.greet( this.state.greeting );
    }
}

