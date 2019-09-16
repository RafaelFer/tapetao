
import React from 'react';
import LayoutInicial from "../../componentes/LayoutInicial"
import { Card, Icon, Avatar, Row, Col } from 'antd';

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
        
        fetch(`http://www.mocky.io/v2/5d7fdb5e30000010008e6c23`)
        .then(response => response.json())
        .then(atletas => {
            console.log('entrou no then');
            this.setState({
                atletasCadastrados: atletas
              })
        });
        console.log(this.state.atletasCadastrados)
    };

    render(){
        return (
            
            <LayoutInicial selectedMenu = {this.props.match.path}>

                <h1>Atletas Cadastrados</h1>
                <Row gutter={10}>
                {this.state.atletasCadastrados.map((atletasCadastrados)=>
                    
                    <Col md={8}>
                                <Card style={{marginBottom: 10}}
                                    actions={[
                                    <Icon type="like" key="like" />,
                                    <Icon type="dislike" key="dislike" />
                                    ]}
                                >
                                <Meta
                                    avatar={<Avatar src={atletasCadastrados.imagem} />}
                                    title={atletasCadastrados.apelido}
                                    description={atletasCadastrados.descricao}
                                />
                                </Card>           
                        </Col>
                        
                   
                )}
                 </Row>
            </LayoutInicial>

        );
    }
}


export default AltetaCard;
