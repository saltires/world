import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

export default class Group extends Component {
    render() {
        return (
            <div>
                <p>这是 Group 组件</p>
                <NavLink to="/group/detail">detail</NavLink>
                <NavLink to="/group/other">other</NavLink>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}
