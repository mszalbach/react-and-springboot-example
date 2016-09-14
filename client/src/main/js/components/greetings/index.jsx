import React, {PropTypes} from "react";
import {connect} from "react-refetch";
import GreetingList from "../greetingList";
import GreetingForm from "../greetingForm";
import Loading from "../loading";
import Error from "../error";

class Greetings extends React.Component {

    static contextTypes = {
        url: PropTypes.string.isRequired,
    };

    render() {

        const {fetch, refresh, greet} = this.props;

        var greetingList;

        if ( fetch.pending ) {
            greetingList = <Loading />;
        } else if ( fetch.rejected ) {
            greetingList = <Error mesage={fetch.reason}/>;
        } else if ( fetch.fulfilled ) {
            greetingList = <GreetingList greetings={fetch.value}/>
        }

        return (<div>
            <GreetingForm refresh={refresh} greet={greet} greeting="Marcel"/>
            {greetingList}
        </div> )


    }

}

export default connect( ( props, context ) => {
    return {
        fetch: {
            url: `${context.url}/greetings`,
            refreshInterval: 500
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