import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Table, Button, Container, Row, Col} from 'react-bootstrap';
import { axiosConfig } from '../constants/requisicao';
import { BrowserRouter as Route, Link} from "react-router-dom";
const FlexContainer = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background: linear-gradient(#56ab2f, #a8e063);
`;
const Formulario = styled.div`
    margin-top: 6em;
    background: whitesmoke;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
    -webkit-box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
    -moz-box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
`;
const Logo = styled.div``;
 export class Lista extends React.Component{
     state = {
         playlistRender: true,
         listaName: [],
         musics: [
           {
           }
         ],
     };
     componentDidMount() {
      this.pegarNomePlaylist();
    }
    pegarMusicasPlaylist = (id) => {
      axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          {
            headers: {
              Authorization: "felipe-monteiro-muyembe",
            },
          }
        )
        .then((response) => {
          console.log(response.data.result.tracks);
          this.setState({ musics: response.data.result.tracks });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    pegarNomePlaylist = () => {
        axios
          .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
          .then((response) => {
            this.setState({ listaName: response.data.result.list });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      deletarPlaylist = (id) => {
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig)
          .then(() => {
            alert("Playlist Deletada com sucesso!");
            this.pegarNomePlaylist();
          })
          .catch((erro) => {
            alert(erro.message);
          });
      };
     render(){
        return  <FlexContainer>
          <Container fluid>
            <Row>
            <Col sm={2} md={3}></Col>
            <Col sm={8} md={6}>
              <Formulario>
              <Logo><img src="./fones-de-ouvido.png"></img></Logo>
              <h2>Todas as suas Playlist </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      {this.state.listaName.map((playlists) =>{
                        return <tr>
                        <th><div onClick={() => this.pegarMusicasPlaylist(playlists.id)}>{playlists.name}</div></th>
                        <th><Button variant="outline-danger" onClick={() => this.deletarPlaylist(playlists.id)}>X</Button>{' '}</th>
                        </tr>
                        })}
                  </tbody>
                </Table>
                
            <h3>Veja abaixo suas músicas</h3>
            <hr/>
                {this.state.musics.map((item) =>{
                  return<Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Artista</th>
                      <th>Ouvir</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.artist}</td>
                      <td><audio controls src={item.url}></audio></td>
                    </tr>
                  </tbody>
                </Table>
                })}
                <Link to="/"><Button  variant="outline-info" >Adicionar PlayList</Button>{' '}</Link>
                <Link to="/AddMusica"><Button variant="outline-info" >Adicionar músicas as playlists</Button>{' '}</Link>
                </Formulario>
                </Col>
            <Col sm={2} md={3}></Col>
            </Row>
          </Container>
        </FlexContainer>
     }
 }
 export default Lista;
              