import React from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router,Link} from "react-router-dom";
import { axiosConfig } from '../constants/requisicoes'
const Formulario = styled.div`
  border: 2px solid black;
  padding: 30px;
  border-radius: 4%;
  background: white;
`;

class FormularioCadastro extends React.Component {
    state = {
       emailInput:'',
       nameInput: ''
      };
       onChangeUsersEmail = (event) =>{
        this.setState({emailInput: event.target.value});
      };
      onChangeUsersNome = (event) =>{
        this.setState({nameInput: event.target.value});
      };

      criarUsuario = () => {
        const body = {
          name: this.state.nameInput,
          email: this.state.emailInput
        };
        axios
          .post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, body, axiosConfig)
          .then(() => {
            alert(`O usuário ${this.state.nameInput} foi criado`);
            this.setState({
              nameInput: "",
              emailInput: ""
            });
          })
          .catch((erro) => {
            alert(erro.message);
          });
      };
    render(){
        return <Formulario>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Endereço de E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email aqui." value={this.state.emailInput} onChange={this.onChangeUsersEmail}/>
            <Form.Text className="text-muted">
              Nunca compartilharemos seu e-mail com mais ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome aqui." value={this.state.nameInput} onChange={this.onChangeUsersNome}/>
          </Form.Group>
          <Button variant="primary" onClick={this.criarUsuario} type="submit">
            Salvar
          </Button>
          <Link to="/ListaUsers"><Button  id="paginalist" variant="outline-info">ir para página de lista.</Button>{' '}</Link>
        </Form>
        
        </Formulario>
    }
}
export default FormularioCadastro;