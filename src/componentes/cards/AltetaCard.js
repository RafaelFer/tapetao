
import React from 'react';
import LayoutInicial from "../../componentes/LayoutInicial"
import { Card, Icon, Avatar, Row, Col, Spin } from 'antd';

const { Meta } = Card;


const INITIAL_STATE = {
    atletasCadastrados: []
}

class AltetaCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    componentDidMount(){
        
        fetch(`http://www.mocky.io/v2/5d837e85340000cd4ff4a559`)
        .then(response => response.json())
        .then(atletas => {
            this.setState({
                atletasCadastrados: atletas
              })
        });
    };

    render(){
        return (
            
            <LayoutInicial selectedMenu = {this.props.match.path}>

                <h1>Atletas Cadastrados</h1>
                <Row gutter={10}>
                {this.state.atletasCadastrados &&
                    this.state.atletasCadastrados.map((atletasCadastrados)=>
                    <Col md={6}>
                                <Card style={{marginBottom: 10}}
                                    actions={[       
                                    <Icon type="like" key="like" />,
                                    <Icon type="dislike" key="dislike" />
                                    ]}
                                    size="small"    
                                >
                                <Meta
                                    avatar={<Avatar src={atletasCadastrados.imagem} />}
                                    title={
                                        <div>
                                            <strong>{atletasCadastrados.apelido} 
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </strong>{<Avatar size='samll' src={'http://t3.gstatic.com/images?q=tbn:ANd9GcRDR2BDQwMK5oF8OW4xRC1MxankAjyPpsK77kTAXebhHJYyIBpL'} />}<br/>
                                        </div>
                                    }    
                                    description={
                                        <div>
                                            <strong>Posição: </strong>{atletasCadastrados.descricao}<br/>
                                            <strong>Descrição do Jogador: </strong>{atletasCadastrados.descricao}
                                        </div>
                                    }
                                />
                                </Card>           
                        </Col>
                )
                }
                 </Row>
            </LayoutInicial>
        );
    }
}


export default AltetaCard;
