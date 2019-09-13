import React from 'react';
import {Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

class MenuLayout extends React.Component {
  
  render() {
    return (  
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{background: '#006400'}}>
          <Menu.Item key="1">
              <Icon type="user-add" />
              <span>New</span>
              <Link to={`/cadastro`}></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>Atletas</span>
              <Link to={`/atletas`}></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="crown" />
              <span>Ranking</span>
              <Link to={`/ranking`}></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="star" />
              <span>Desafios</span>
              <Link to={`/desafios`}></Link>
            </Menu.Item>
          </Menu>
    );
  }
}

export default MenuLayout;