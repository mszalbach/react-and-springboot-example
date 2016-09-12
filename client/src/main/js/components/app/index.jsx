import React from "react";
import { Provider } from 'react-redux';
import GreetingList from "components/greetingList";
import { createStore } from 'redux'
import greetings from "../../reducers";

export default class App extends React.Component {

    render() {
        const store = createStore(greetings);

        return <Provider store={store}>
                    <GreetingList greetings={store.getState()} />
                </Provider>;
    }
}