import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Headers extends Component {
    link = (address) => () => {
        console.log(this.props);
        this.props.history.push(`/${address}?name=saltire&age=30`)
    }

    render() {
        return (
            <div>
                <p onClick={this.link('home')}>跳转至 home</p>
            </div>
        )
    }
}

export default withRouter(Headers)
