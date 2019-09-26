
import React from 'react';
import LayoutInicial from "../LayoutInicial"
import { Card,  Avatar, Row, Col } from 'antd';
import FireStoreParser from 'firestore-parser'

const { Meta } = Card;


const INITIAL_STATE = {
    atletasCadastrados: []
}



class AtletaCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    componentDidMount(){

        fetch(`https://tapetao-699a1.firebaseio.com/atletas.json`)
        .then(response => response.json())
        .then(json => FireStoreParser(json))
        .then(json => console.log(json));
        
    

        //fetch(`https://tapetao-699a1.firebaseio.com/atletas.json`)
        //fetch(`http://www.mocky.io/v2/5d83b6e03400009762f4a73a`)
        //.then(response => response.json())
        //.then(atletas => {
        //    console.log(atletas);
        //    console.log(atletas.mapValue);
        //    this.setState({
        //        atletasCadastrados: atletas
        //      })
        //});
    };

    render(){
        return (
            
            <LayoutInicial selectedMenu = {this.props.match.path}>  
                <h1>Atletas Cadastrados</h1>
                
                <Row gutter={10}> 
                {this.state.atletasCadastrados &&
                    this.state.atletasCadastrados.map((atletasCadastrados)=>
                    <Col md={6} >
                                <Card style={{marginBottom: 10}}
                                    actions={[       
                                    ]}
                                    size="small"    
                                   
                                >
                                <Meta
                                    avatar={<Avatar src={atletasCadastrados.imagem} />}
                                    title={
                                        <div>
                                            <strong>{atletasCadastrados.apelido} 
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </strong>{<Avatar size='samll' src={atletasCadastrados.imagemTime} />}<br/>
                                        </div>
                                    }    
                                    description={
                                        <div>
                                            <strong>Posição: </strong>{atletasCadastrados.posicao}<br/>
                                            <strong>Caracteristicas: </strong>{atletasCadastrados.caracteristicas}<br/>
                                            <strong>Descrição: </strong>{atletasCadastrados.descricao}
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


export default AtletaCard;
