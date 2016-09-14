import React from 'react'
import './error.css';

export default class Error extends React.Component {

    render() {
        var {message} = this.props;
        return <div className="error">ERROR: {message}</div>
    }

}