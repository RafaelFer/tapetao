import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import CadastroAtleta from './componentes/cadastro/CadastroAtleta'
import AtletaCard from './componentes/cards/AtletaCard';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/"         exact={true} component={AtletaCard} />
        <Route path="/cadastro" exact={true} component={CadastroAtleta} />
        <Route path="/atletas" exact={true} component={AtletaCard} />
    </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
