import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';
import CadastroAtleta from './componentes/cadastro/CadastroAtleta'


const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/"         exact={true} component={App} />
        <Route path="/cadastro" exact={true} component={CadastroAtleta} />
        <Route path="/atletas" exact={true} component={CadastroAtleta} />
        <Route path="/ranking" exact={true} component={CadastroAtleta} />
        <Route path="/desafios" exact={true} component={CadastroAtleta} />
        
    </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
