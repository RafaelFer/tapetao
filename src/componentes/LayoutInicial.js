import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

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
              <Icon type="user" />
              <span>Atletas</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="star" />
              <span>Desafios</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="crown" />
              <span>Ranking</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#32CD32	', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
           
          </Content>
          <Footer style={{ textAlign: 'center', background: '#32CD32' }}>Please use the Song</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutInicial;