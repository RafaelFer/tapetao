import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';
import CadastroAtleta from './cadastro/CadastroAtleta';

const { Header, Content, Footer, Sider } = Layout;


class LayoutInicial extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh'}} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{background: '#006400'}}>
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
              <Link to={`/desafio`}></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#32CD32	', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <CadastroAtleta></CadastroAtleta>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#32CD32' }}>Please use the Song</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutInicial;