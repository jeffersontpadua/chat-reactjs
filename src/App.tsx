import React, { Component } from 'react';

import { EntradaTexto } from './EntradaTexto';
import { ListarMensagens } from './ListarMensagens';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListarMensagens />
        <EntradaTexto />
      </div>
    );
  }
}

export default App;
