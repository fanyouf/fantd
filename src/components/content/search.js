import React, { Component } from 'react'
import { Input } from 'antd';
import './index.css'
class Search extends Component {
    enterPress = (event) => {
        if(event.key === 'Enter') {
            this.props.add(event.target.value)
            event.target.value = ''
        }
    }
    render() {
        return (<Input type="text" onPressEnter={this.enterPress} className="search" placeholder="添加ToDo" required="required" autoComplete="off"></Input>)
    }
}
 
export default Search