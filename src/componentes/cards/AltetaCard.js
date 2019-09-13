
import React from 'react';
import LayoutInicial from "../../componentes/LayoutInicial"

class AltetaCard extends React.Component {

    
    render(){
        return (
            <LayoutInicial selectedMenu = {this.props.match.path}>
                <h1>Altetas</h1>
            </LayoutInicial>

        );
    }
}


export default AltetaCard;
