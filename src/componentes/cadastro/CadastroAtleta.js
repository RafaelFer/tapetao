
import React from 'react';
import { Input, DatePicker,Card, Button,Select} from 'antd';
import UploadFoto from './UploadFoto';
import LayoutInicial from "../../componentes/LayoutInicial"
import firebase from '../../containers/Firebase/Firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const { TextArea } = Input;
const { Option } = Select;

const INITIAL_STATE = {
    isLogged: false 
}

class CadastroAtleta extends React.Component {

    componentDidMount = ()=>{
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                isLogged: !!user
            })
            console.log("user > ",user)
        })
        
    }    

    uiConfig = {
        signInFlow: "popup",
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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

    render(){
        return (
            <LayoutInicial selectedMenu = {this.props.match.path}>
                {this.state.isLogged ? (
                    <span>
                        <h1>Cadastrado</h1>
                        <button onClick={()=>firebase.auth().signOut()}>Sair</button>
                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                        <Input placeholder="nome" style={{ width: 350 }} value={firebase.auth().currentUser.displayName} disabled></Input><br/>
                        
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
