import React, { Component } from "react";
import ReactDOM from "react-dom";
import api from "../../services/api";

export default class Cep extends Component {
  state = {
    cep: "",
    dadosCep: {}
  };

  pegarCepDigitado = (event) => {
    let valorCep = event.target.value;
    this.setState({ cep: valorCep });
  };

  buscarCepDigitado = (event) => {
    this.buscarCepUsandoApi();
  };

  async buscarCepUsandoApi() {
    let { cep } = this.state;
    let response = await api.get(`${cep}/json`);
    this.setState({ cep, dadosCep: response.data });
  }

  render() {
    let { dadosCep } = this.state;
    return (
      <div>
        <input type="text" onChange={this.pegarCepDigitado} />
        <button onClick={this.buscarCepDigitado}>Buscar CEP</button>
        <br />
        <br />
        <div>
          <h2>Dados CEP</h2>
          <br />
          <p>CEP : {dadosCep.cep}</p>
          <p>LOGRADOURO: {dadosCep.logradouro}</p>
          <p>BAIRRO: {dadosCep.bairro}</p>
          <p>LOCALIDADE: {dadosCep.localidade}</p>
        </div>
      </div>
    );
  }
}
