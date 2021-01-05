import React, { Component } from 'react'

export class Custom extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default Custom
