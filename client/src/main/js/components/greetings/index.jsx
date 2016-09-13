import React, {Component, PropTypes} from 'react'
import {connect, PromiseState} from 'react-refetch'
import GreetingList from '../greetingList'
import GreetingForm from '../greetingForm'

class Greetings extends React.Component {

    static contextTypes = {
        url: PropTypes.string.isRequired,
    }

    render() {

        const {fetch, refresh, greet} = this.props;

        return (<div>
            <GreetingForm refresh={refresh} greet={greet}/>
            <GreetingList greetingsRequest={fetch}/>
        </div> )


    }

    handleClick( name ) {
        this.props.greet( name )
        this.props.refresh()

    }

}

export default connect( ( props, context ) => {
    return {
        fetch: `${context.url}/greetings`,

        refresh: () => ({
            fetch: {
                url: `${context.url}/greetings`,
                force: true,
                refreshing: true
            }
        }),

        greet: name => ({
            greetResponse: {
                url: `${context.url}/greeting`,
                method: 'POST',
                body: name
            }
        })
    }
} )( Greetings )