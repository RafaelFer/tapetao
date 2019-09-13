import React from 'react';
import { Layout } from 'antd';
import MenuLayout from '../componentes/menu/MenuLayout';

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
          <MenuLayout></MenuLayout>
        </Sider>
        <Layout>
          <Header style={{ background: '#32CD32	', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
             {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center', background: '#32CD32' }}>Please use the Song</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutInicial;