import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink activeStyle={{ color: 'red' }} to="/">home</NavLink>
                <NavLink activeStyle={{ color: 'red' }} to="/about">about</NavLink>
                <NavLink activeStyle={{ color: 'red' }} to="/group">group</NavLink>
            </div>
        )
    }
}
