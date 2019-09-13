
import React from 'react';
import { Card } from 'antd';
import LayoutInicial from "../../componentes/LayoutInicial"

class AltetaCard extends React.Component {

    
    render(){
        return (
            <LayoutInicial selectedMenu = {this.props.match.path}>
                <h1>Altetas</h1>
                <Card title="">Card content</Card>
            </LayoutInicial>

        );
    }
}


export default AltetaCard;
