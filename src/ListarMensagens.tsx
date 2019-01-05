import React, { Component } from 'react';

import { appSocket } from './appSocket';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface State {
  mensagens: MensagemPayload[];
}

export class ListarMensagens extends Component<{}, State> {
  state: State = {
    mensagens: [{ nome: "Jefferson", mensagem: "Teste" }]
  };

  componentDidMount() {
    appSocket.on("mensagens", (mensagens: MensagemPayload[]) => {
      this.setState({
        mensagens
      });
    });
  }

  renderMensagens = () => {
    return this.state.mensagens.map(mensagem => <Mensagem {...mensagem} />);
  };

  render() {
    return <ul className="ListarMensagens">{this.renderMensagens()}</ul>;
  }
}

const Mensagem = ({ mensagem, nome }: MensagemPayload) => {
  return (
    <li className="Mensagem">
      <p>
        {mensagem} -
        <small>
          <i> {nome}</i>
        </small>
      </p>
    </li>
  );
};
