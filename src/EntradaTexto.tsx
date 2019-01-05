import React, { ChangeEvent, Component } from 'react';

import { appSocket } from './appSocket';

interface State {
  mensagem: string;
}

export class EntradaTexto extends Component<{}, State> {
  state: State = {
    mensagem: ""
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(`Novo texto: ${e.currentTarget.value}`);

    this.setState({
      mensagem: e.currentTarget.value
    });
  };

  handleClick = () => {
    console.log("Botão clicado");

    appSocket.emit("nova-mensagem", {
      nome: "Jefferson",
      mensagem: this.state.mensagem
    });

    this.setState({
      mensagem: ""
    });
  };

  render() {
    return (
      <div className="EntradaTexto">
        <textarea onChange={this.handleChange} value={this.state.mensagem} />
        <div className="ButtonContainer">
          <button onClick={this.handleClick}>Enviar</button>
        </div>
      </div>
    );
  }
}
