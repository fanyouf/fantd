import React, { Component } from 'react'
import { List, Typography, Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { QS } from '../../constant'
import './index.css'
class Item extends Component {
    handleMenuClick(item,e) {
    console.log('click', e,item);
    this.props.modType.bind(this)(item.id,QS[e.key])
    }
      
    render() {
        return (
            <List
                    header={<div>Header</div>}
                    footer={<div>共{this.props.list.length}项</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => (
                        <List.Item actions={[<Dropdown overlay={<Menu onClick={this.handleMenuClick.bind(this,item)}>
                            {Object.keys(QS).map(it => {
                                return (<Menu.Item key={it} >{QS[it]}</Menu.Item>)
                            })}
                          </Menu>}>

                            <a className="ant-dropdown-link" onClick={e=>e.preventDefault()} href="aa">
                              {item.type} <DownOutlined />
                            </a>
                          </Dropdown>]}>
                        <Typography.Text mark>[{item.type}]</Typography.Text> {item.text}
                        </List.Item>
                    )}>
        
                </List>
        )
    }
}
 
export default Item