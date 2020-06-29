import React, { Component } from 'react';
import './App.css';
import { Layout, Radio  } from 'antd';
import MyHeader from './components/header'
import MyContent from './components/content'
import LISTSTORE from '../src/utils/list'
import CONST from './constant/index'
const { Header, Footer, Content } = Layout
class App extends Component {
  state = {
    list: LISTSTORE.get() || [
      {
        id: Date.now(),
        type:CONST.Q1,
        text: '大家好',
        status: 'working'
      }
    ]
  }

  add = (item) => { //添加一个todo
    this.setState(preState => {
      let list = Object.assign([], preState.list)
      list.push({
        text: item,
        id: new Date().getTime(),
        status: 'working'
      })
      LISTSTORE.save(list)
      return {
        list
      }
    })
  }
  delete(id) { //删除一个todo
    this.setState(preState => {
      let newTodo = preState.todo
      let list = newTodo.list.filter(item => id !== item.id)
      newTodo.list = list
      return {
        todo: newTodo
      }
    })
  }
  modType= (id, type) => { //完成一个todo
    this.setState(preState => {
      const list = preState.list.map(item => {
        if (item.id === id) {
          item.type = type
        }
        return item
      })
      
      return {
        list
      }
    })
  }
  finish(id) { //完成一个todo
    this.setState(preState => {
      let newTodo = preState.todo
      let list = newTodo.list.map(item => {
        if (item.id === id) {
          item.status = 'finished'
        }
        return item
      })
      newTodo.list = list
      return {
        todo: newTodo
      }
    })
  }
  clear() { //清空todo列表
    this.setState(preState => {
      let newTodo = preState.todo
      newTodo.list = []
      return {
        todo: newTodo
      }
    })
  }

  render() {
    return (
      <Layout>
        <Header><MyHeader></MyHeader></Header>
   
        <Content>
          <Radio.Group onChange={this.handleSizeChange}>
            <Radio.Button value="large">进行中</Radio.Button>
            <Radio.Button value="default">已完成</Radio.Button>
            <Radio.Button value="small">全部</Radio.Button>
          </Radio.Group>

          

          <MyContent modType={this.modType} add={this.add} list={this.state.list} todo={this.state.list}></MyContent>

        </Content>

        <Footer>Footer</Footer>
    </Layout>
    );
  }
}

export default App;
