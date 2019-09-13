import React from 'react';
import ptBR from 'antd/es/locale/pt_BR';
import LayoutInicial from './componentes/LayoutInicial'
import { ConfigProvider } from 'antd';

import './App.css';

function App() {
  return (
    <div className="App">
     <ConfigProvider locale={ptBR}>
       <LayoutInicial>
        
       </LayoutInicial>
     </ConfigProvider>
    </div>
  );
}

export default App;
