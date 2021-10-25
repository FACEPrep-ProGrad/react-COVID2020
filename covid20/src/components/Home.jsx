import React, { Component } from 'react'
import Overall from './Overall'
import Search from './Search'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Overall />
                <Search />
            </div>
        )
    }
}
