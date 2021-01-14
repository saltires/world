import React, { Component } from 'react'
import axios from 'axios'
import './Head.scss'

export default class Head extends Component {

    state = {
        inputValue: ''
    }

    getUser = (inputValue) => {
        const url = `/api/search/count?q=${inputValue}&type=Users`

        axios.get(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    search = () => {
        const inputValue = this.inputRefs.value
        this.setState({
            inputValue
        })
        this.getUser(inputValue)
    }

    render() {
        return (
            <div className="header">
                <h2>点击输入以搜索用户头像</h2>
                <input type="text" ref={ele => { this.inputRefs = ele }} />
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
