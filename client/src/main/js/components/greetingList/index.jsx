import React from 'react'

export default class GreetingList extends React.Component {

    render() {
        const {greetingsRequest} = this.props;

        if ( greetingsRequest.pending ) {
            return <div>Loading</div>
        } else if ( greetingsRequest.rejected ) {
            return <div>ERROR: {fetch.reason}</div>
        } else if ( greetingsRequest.fulfilled ) {
            return <ul>
                {greetingsRequest.value.map( greeting =>
                                          <li key={greeting.id}>{greeting.content}</li>

                )}

            </ul>
        }
    }
}