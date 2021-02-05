import React, { Component, Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import Nav from './components/common/Nav'
import './index.css'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Nav></Nav>
                {renderRoutes(routes)}
            </Fragment>
        )
    }
}
