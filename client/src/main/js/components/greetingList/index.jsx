import React, {Component, PropTypes} from 'react'
import {connect, PromiseState} from 'react-refetch'

class GreetingList extends React.Component {

    static contextTypes = {
        url: PropTypes.string.isRequired,
    }

    render() {
        const {fetch} = this.props;

        if ( fetch.pending ) {
            return <div>Loading</div>
        } else if ( fetch.rejected ) {
            return <div>ERROR: {fetch.reason}</div>
        } else if ( fetch.fulfilled ) {
            return <ul>
                {fetch.value.map( greeting =>
                                          <li key={greeting.id}>{greeting.content}</li>

                )}

            </ul>
        }
    }
}

export default connect( ( props, context ) => ({
    fetch: `${context.url}/greetings`
}) )( GreetingList )