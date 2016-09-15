import React from "react";
import Greetings from "components/greetings";
import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

export default class App extends React.Component {

    render() {
        return <div className="greetings">
            <Greetings />
        </div>;
    }
}