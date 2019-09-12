import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LayoutAtleta from './componentes/LayoutAtleta';
import LayoutCadastro from './componentes/LayoutCadastro';
import LayoutRanking from './componentes/LayoutRanking';
import LayoutDesafio from './componentes/LayoutDesafio';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/"         exact={true} component={App} />
            <Route path="/cadastro" exact={true} component={LayoutCadastro} />
            <Route path="/atletas"   exact={true} component={LayoutAtleta} />
            <Route path="/ranking"  exact={true} component={LayoutRanking} />
            <Route path="/desafio"  exact={true} component={LayoutDesafio} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
