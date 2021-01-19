import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link to="/about/saltire/21">About</Link></li>
                    <li><Link to="/home/?name=saltire&age=20">Home</Link></li>
                    <li><Link to={{pathname: '/content', state: {name: 'saltire', age: 20}}}>Content</Link></li>
                </ul>
            </div>
        )
    }
}
