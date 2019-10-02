import React from 'react';
import LayoutInicial from "../LayoutInicial"
import { Card,  Avatar, Row, Col } from 'antd';
import firebase from '../../containers/Firebase/Firebase';

const { Meta } = Card;

const INITIAL_STATE = {
    atletasCadastrados: []
}

let atletas = [];

class AtletaCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }
    
    componentDidMount(){
        
        const db = firebase.firestore();

        db.settings({
            timestampsInSnapshots: true
          });
        
          let atletasRef = db.collection('atletas');
                 atletasRef.get()
                .then(snapshot => {
                     snapshot.forEach(doc => { 
                        atletas = atletas.concat(doc.data())
                    });
                    this.setState({
                        atletasCadastrados: atletas
                    })
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
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
                                            <strong>Nome: </strong>{atletasCadastrados.nome}<br/>
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
