import React, {Component } from 'react'
import Search from './search'
import Items from './items'
export default class content extends Component {
    render () {
        return (
            <div className="content">
                
                <Search add={this.props.add}></Search>
                <Items modType={this.props.modType} list={this.props.list}></Items>
            </div>
        )
    }
}