import React, {PropTypes} from "react";
import GreetingList from "components/greetingList";
import GreetingForm from "components/greetingForm";
import Greetings from "components/greetings";

export default class App extends React.Component {

    static childContextTypes = {
        url: PropTypes.string.isRequired,
    }

    getChildContext() {
        return {
            url: 'http://localhost:8081'
        }
    }

    render() {

        return <div>
            <Greetings />
        </div>;
    }
}