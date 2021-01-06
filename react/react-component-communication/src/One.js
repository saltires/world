import React, { Component } from 'react'
import Two from './Two'

export default class One extends Component {
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
