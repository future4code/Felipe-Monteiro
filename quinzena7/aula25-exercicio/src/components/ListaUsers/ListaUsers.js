import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import { axiosConfig } from '../constants/requisicoes';

const FlexContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#5667dd, #5ecbf7);
`;
const ListaCadastro = styled.div`
  border: 2px solid black;
  padding: 60px;
  border-radius: 4%;
  background: white;
`;

 export class ListaUsers extends React.Component{
     state = {
         usuarios: []
     }
     componentDidMount() {
      this.pegarUsuarios();
    }
    pegarUsuarios = async () => {
      try {
        const resposta = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, axiosConfig);
  
        this.setState({ usuarios: resposta.data });
      } catch (erro) {
        alert(erro.message);
      }
    };
    deletarUsuario = (id) => {
      axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, axiosConfig)
        .then(() => {
          alert("Usuário deletado com sucesso!");
          this.pegarUsuarios();
        })
        .catch((erro) => {
          alert(erro.message);
        });
    };
     render(){
        const listaUsuarios = this.state.usuarios.map((item) =>{
          return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><Button onClick={() => {
              this.deletarUsuario(item.id);
            }} variant="outline-danger">X</Button>{' '}</td>
          </tr>
        })
        return <FlexContainer>
          <ListaCadastro>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios}
          </tbody>
          </Table>
          </ListaCadastro>
        </FlexContainer>
        
     }
 }
 export default ListaUsers;