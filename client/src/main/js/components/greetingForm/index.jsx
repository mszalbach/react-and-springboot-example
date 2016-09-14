import React from "react";

export default class GreetingForm extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {greeting: props.greeting};
    }

    render() {

        return (<div>
            Greet
            <input id="greeting" type="text" name="greeting" value={this.state.greeting}
                   onChange={( event ) => this.handleChange( event )}/>
            <button onClick={() => this.click()}>Greet!</button>
        </div>)
    }

    handleChange( event ) {
        event.preventDefault();
        this.setState( {greeting: event.target.value} );
    }

    click() {
        this.props.greet( this.state.greeting );
    }
}

