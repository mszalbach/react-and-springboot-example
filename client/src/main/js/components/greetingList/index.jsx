import React from 'react'

export default class GreetingList extends React.Component {

    render() {
        const {greetings} = this.props;
            return <ul>
                {greetings.map( greeting =>
                                        <li key={greeting.id}>{greeting.content}</li>

                )}

            </ul>
    }
}