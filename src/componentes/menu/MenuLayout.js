import React from 'react';
import {Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import _ from 'lodash';


const INITIAL_STATE = { 
  selectedKey: '1',
  menu:[
    {label:"Atletas",route:"/atletas",id:1,icon:"user"},
    {label:"Cadastre-se",route:"/cadastro",id:2,icon:"user-add"},
    {label:"Jogos",route:"/jogo",id:3,icon:"skin"},
    {label:"Ranking",route:"/ranking",id:4,icon:"crown"},
    {label:"Desafios",route:"/desafios",id:5,icon:"star"},
  ]
}

class MenuLayout extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
  }

  componentDidMount(){
    this.setState({
      selectedKey: this.props.selectedMenu === "/" ? 1 : _.filter(this.state.menu,(o)=>{return o.route === this.props.selectedMenu})[0].id
    }) 
  }

  render() {
    return (  
          <Menu theme="dark" selectedKeys={[this.state.selectedKey && this.state.selectedKey.toString()]} mode="inline" style={{background: '#006400'}}>
            {this.state.menu.map((menuItem)=>
              <Menu.Item key={menuItem.id}>
              <Icon type={menuItem.icon} />
              <span>{menuItem.label}</span>
              <Link to={menuItem.route}></Link>
          </Menu.Item>
      )}
          </Menu>
    );
  }
}

export default MenuLayout;