import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'

class GreetingList extends Component {
    render() {
        const { fetch } = this.props

        if (fetch.pending) {
            return <div>Loading</div>
        } else if (fetch.rejected) {
            return <div>ERROR: {userFetch.reason}</div>
        } else if (fetch.fulfilled) {
            return <ul>
                {fetch.value.map( greeting =>
                                              <li key={greeting.id}>{greeting.content}</li>

                )}

            </ul>
        }

        // similar for `likesFetch`
    }
}

export default connect(props => ({
    fetch: `http://localhost:8081/greetings`
}))(GreetingList)