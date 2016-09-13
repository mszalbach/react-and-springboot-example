import React, {PropTypes} from 'react'
import {connect} from 'react-refetch'
import GreetingList from '../greetingList'
import GreetingForm from '../greetingForm'

class Greetings extends React.Component {

    static contextTypes = {
        url: PropTypes.string.isRequired,
    };

    render() {

        const {fetch, refresh, greet} = this.props;

        return (<div>
            <GreetingForm refresh={refresh} greet={greet}/>
            <GreetingList greetingsRequest={fetch}/>
        </div> )


    }

}

export default connect( ( props, context ) => {
    return {
        fetch: {
            url: `${context.url}/greetings`,
            refreshInterval: 60000
        },

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