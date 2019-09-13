
import React, { Component } from 'react';
import { Input, Tooltip, Icon, DatePicker,Card, Button  } from 'antd';
import UploadFoto from './UploadFoto';
import LayoutInicial from "../../componentes/LayoutInicial"

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;

class CadastroAtleta extends React.Component {

    
    render(){
        return (
            <LayoutInicial>
                <Card style={{ width: 800 }}>
                    <Input placeholder="Nome" style={{ width: 350 }} ></Input><br/>
                    <br></br>
                    <Input placeholder="Apelido" style={{ width: 350 }} ></Input><br/>
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
