import React from 'react';
import LayoutInicial from "../LayoutInicial"
import { Card,  Avatar, Row, Col } from 'antd';
import _ from 'lodash';
import firebase from '../../containers/Firebase/Firebase'
import { app } from 'firebase';
import Firebase from '../../containers/Firebase/Firebase';

const { Meta } = Card;

const INITIAL_STATE = {
    atletasCadastrados: []
}

class AtletaCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
        this.firebaseDao = new Firebase();  
    }

    componentDidMount(){
       
        this.firebaseDao.getAllAtletas()
        .then((data)=>{
            console.log(data);
        })
        .catch((e)=>{
            console.log("deu ruim");
            console.log(e);
        })
        
        //fetch(`https://tapetao-699a1.firebaseio.com/atletas.json`)
        //.then(response => response.json())
       // .then(atletas => {
        //       console.log(_.values(atletas));
        //    this.setState({
        ///        atletasCadastrados: _.values(atletas)
       //       })
       // });


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
