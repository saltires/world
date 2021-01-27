import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import Nav from '../../components/Nav'
import About from '../About'
import Home from '../Home'
import Content from '../Content'
import Headers from '../../components/Headers'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Headers />
                <Route path="/about/:name/:age" component={About}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/content" component={Content}></Route>
            </div>
        )
    }
}
