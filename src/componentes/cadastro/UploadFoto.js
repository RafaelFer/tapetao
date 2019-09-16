import React from 'react';
import { Upload, Button, Icon } from 'antd';

const fileList = [];

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const INITIAL_STATE = { 
    buttonState: true,
    buttonLabel: "Foto"
}

class UploadFoto extends React.Component {

    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    handleFile = (info) =>{
       console.log(info);
       this.setState({
        buttonState: !this.state.buttonState
       })
    }
    
    render(){
        return (
            <div>
                <div>
                    <Upload  {...props} onChange={this.handleFile}>
                    <Button disabled={!this.state.buttonState} onClick={this.verificaTamanho}>
                        <Icon type="upload" /> {this.state.buttonLabel} 
                    </Button>
                    </Upload>
                </div>
            </div>
        );
    }
}


export default UploadFoto;
