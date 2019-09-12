
import React, { Component } from 'react';
import { Input, Tooltip, Icon, DatePicker,Card  } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;

class CadastroAtleta extends React.Component {

    
    render(){
        return (
            <div>
                <Card style={{ width: 800 }}>
                    <Input placeholder="Nome" style={{ width: 350 }} ></Input><br/>
                    <br></br>
                    <Input placeholder="Apelido" style={{ width: 350 }} ></Input><br/>
                    <br></br>
                    <DatePicker onChange={onChange} placeholder="Entrada do Atleta" /><br/>
                    <br></br>
                    <TextArea rows={4} placeholder="Descrição do Atleta"/>
                </Card>
            </div>

        );
    }
}

function onChange(date, dateString) {
    console.log(date, dateString);
}


export default CadastroAtleta;
