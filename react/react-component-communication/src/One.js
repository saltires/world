import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Two from './Two'

export default class One extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    }
    render() {
        const { list } = this.props
        return (
            <div>
                <ul>
                    {list.map((item,index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                <Two changeList={this.props.changeList}></Two>
            </div>
        )
    }
}
