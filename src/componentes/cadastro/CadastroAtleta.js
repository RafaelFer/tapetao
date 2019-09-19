
import React from 'react';
import { Input, DatePicker,Card, Button,Select} from 'antd';
import UploadFoto from './UploadFoto';
import LayoutInicial from "../../componentes/LayoutInicial"

const { TextArea } = Input;
const { Option } = Select;


class CadastroAtleta extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }
    
    render(){
        return (
            <LayoutInicial selectedMenu = {this.props.match.path}>
                <h1>Cadastro de Atletas</h1>
                <Card style={{ width: 800 }}>
                    <Input placeholder="Nome" style={{ width: 350 }} ></Input><br/>
                    <br></br>
                    <Input placeholder="Apelido" style={{ width: 350 }} ></Input><br/>
                    <br></br>
                    <Select placeholder="Posição do Jogador" style={{ width: 200 }}>
                        <Option value="1">Linha</Option>
                        <Option value="2">Goleiro</Option>
                    </Select><br/>
                    <br></br>
                    <Select placeholder="Time do Jogador" style={{ width: 200 }}>
                        <Option value="1">Palmeiras</Option>
                        <Option value="2">Corinthians</Option>
                        <Option value="3">Palmeiras</Option>
                        <Option value="4">Santos</Option>
                        <Option value="5">Flamengo</Option>
                        <Option value="6">Outro</Option>
                    </Select><br/>
                    <br></br>
                    <DatePicker onChange={onChange} placeholder="Entrada do Atleta" /><br/>
                    <br></br>
                    <TextArea rows={4} placeholder="Descrição do Atleta"/><br/>
                    <br></br>
                    <UploadFoto></UploadFoto>
                    <br/>
                    <br></br>
                    <Button type="primary" icon="save">Salvar Atleta</Button>
                </Card>
            </LayoutInicial>

        );
    }
}

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default CadastroAtleta;
