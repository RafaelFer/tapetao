import React from 'react';
import {Input,Form,Avatar, Button,Select, Icon} from 'antd';
import LayoutInicial from "../../componentes/LayoutInicial"
import firebase from '../../containers/Firebase/Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const { TextArea } = Input;
const { Option } = Select;

const INITIAL_STATE = {
    isLogged: false,
    nome: "",
    email: "",
    apelido: "",
    descricao: "",
    time: "",
    posicao: "",
    validate:true
}

class CadastroAtleta extends React.Component {

    componentDidMount = ()=>{
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                isLogged: !!user,
                nome:user?firebase.auth().currentUser.displayName:"",
                email:user?firebase.auth().currentUser.email:""
            })
        }) 
    }    

    uiConfig = {
        signInFlow: "popup",
        signInOptions:[
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess: ()=> false
        }
    }

    constructor(props) {
        super(props);  
        this.state = {...INITIAL_STATE}
    }

    handleChangeText = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChangeOption = (value,e) =>{
        this.setState({
            [e.props.parent]:e.props.children
        })
    }

    handleChangeOptionTime = (value,e) =>{
        this.setState({
            [e.props.parent]:e.props.value
        })
    }

    cadastrarAtleta = ()=>{
        console.log(this.state)
    }

    render(){
        return (
            <LayoutInicial selectedMenu = {this.props.match.path}>
                {this.state.isLogged ? (
                    <span> 
                        <h1>Complete seu cadastro</h1>
                        <Input placeholder="nome" name="nome" style={{ width: 350 }} value={firebase.auth().currentUser.displayName} disabled></Input><br/>
                        <br></br>
                        <Input placeholder="email" name="email" style={{ width: 350 }} value={firebase.auth().currentUser.email} disabled></Input><br/>
                        <br></br>
                        <Input onChange={this.handleChangeText} name="apelido" placeholder="Apelido" style={{ width: 350 }} ></Input><br/>
                        <br/>
                        <Select onChange={this.handleChangeOption} name="posicao" placeholder="Posição do Jogador" style={{ width: 200 }}>
                            <Option value="1" parent="posicao">Linha</Option>
                            <Option value="2" parent="posicao">Goleiro</Option>
                        </Select><br/>
                        <br></br>
                        <Select onChange={this.handleChangeOptionTime} placeholder="Time do Jogador" name="time" style={{ width: 200 }}>
                            <Option parent="time" value="SAOPAULO"><Avatar shape="square" src='https://s.glbimg.com/es/sde/f/equipes/2018/03/11/sao-paulo.svg'/></Option>
                            <Option parent="time" value="CORINTHIANS"><Avatar shape="square" src='https://s.glbimg.com/es/sde/f/equipes/2018/03/10/corinthians.svg'/></Option>
                            <Option parent="time" value="PALMEIRAS"><Avatar shape="square" src='https://s.glbimg.com/es/sde/f/equipes/2019/07/07/palmeiras.svg'/></Option>
                            <Option parent="time" value="SANTOS"><Avatar shape="square" src='https://s.glbimg.com/es/sde/f/equipes/2018/03/12/santos.svg'/></Option>
                            <Option parent="time" value="FLAMENGO"><Avatar shape="square" src='https://s.glbimg.com/es/sde/f/equipes/2018/04/09/Flamengo.svg'/></Option>
                            <Option parent="time" value="CRUZEIRO"><Avatar shape="square" src='https://s.glbimg.com/es/sde/f/equipes/2018/03/11/cruzeiro.svg'/></Option>
                            <Option parent="time" value="OUTRO">OUTRO</Option>
                        </Select><br/>
                        <br></br>
                        <TextArea onChange={this.handleChangeText} name="descricao" rows={4} style={{width:450}} placeholder="Descrição do Atleta"/><br/>
                        <br></br>
                        <Button onClick={this.cadastrarAtleta} type="primary" icon="save">Concluir Cadastro</Button><br/>
                        <br/>
                        <button onClick={()=>firebase.auth().signOut()}>Sair</button>
                    </span>
                    ) 
                    :
                    (
                        <StyledFirebaseAuth 
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                            />
                    )
                }
            </LayoutInicial>
        );
    }
}

export default CadastroAtleta;
