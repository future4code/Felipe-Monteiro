import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Button, Form, Col, Container, Row} from 'react-bootstrap';
import { axiosConfig } from '../constants/requisicao';
import { BrowserRouter as Route, Link} from "react-router-dom";
import '../addMusicasPlaylist/AddMusica'
import './AddMusica.css'
const FlexContainer = styled.main`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#56ab2f, #a8e063);
    display: flex;
    align-items: center;
`;
const Formulario = styled.div`

    background: whitesmoke;
    padding: 50px 30px 30px 30px;

    border-radius: 10px;
    text-align: center;
    box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
    -webkit-box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
    -moz-box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
`;
const Botoes = styled.div`
`;

const Title = styled.div`
    margin-right: 5px;
`;

let trackToPlaylistId;
const Logo = styled.div``;

export class AddMusica extends React.Component{
    state ={
        artistInput: '',
        nomeMusicaInput: '',
        url: '',
        listaName: []
    }
    componentDidMount() {
        this.pegarNomePlaylist();
      }
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
      onChangePlaylistSelect = (event) => {
        trackToPlaylistId = event.target.value;
      };
    onChangeArtistInput = (event) =>{
        this.setState({ artistInput: event.target.value });
    }
    onChangenomeMusicaInput = (event) =>{
        this.setState({ nomeMusicaInput: event.target.value });
    }
    onChangeurl = (event) =>{
        this.setState({ url: event.target.value });
    }
    addMusicToPlaylist = (id) => {
        const body = {
          name: this.state.nomeMusicaInput,
          artist: this.state.artistInput,
          url: this.state.url
        };
        axios
          .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            body,
            {
              headers: {
                Authorization: "felipe-monteiro-muyembe",
              },
            }
          )
          .then((response) => {
            console.log(response);
            alert("Música adicionada com sucesso!");
            this.setState({ nomeMusicaInput: "" });
            this.setState({ artistInput: "" });
            this.setState({ url: "" });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
    render(){

        return<FlexContainer>
            <Container>
            <Row>
            <Col sm md={3}></Col>
            <Col md={6} sm>
              <Formulario id="colmid">
                <Logo><img src="./fones-de-ouvido.png"></img></Logo>
                <Title><h3>Adicionar uma música</h3></Title>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={4}>
                            <h5>Nome do cantor :</h5>
                            </Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Nome do cantor..." onChange={this.onChangeArtistInput} value={this.state.artistInput}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={4}>
                            <h5>Nome da música :</h5>
                            </Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Nome da música..." onChange={this.onChangenomeMusicaInput} value={this.state.nomeMusicaInput}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column lg={4}>
                            <h5>URL da música :</h5>
                            </Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="URL..." onChange={this.onChangeurl} value={this.state.url}/>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <h5>Selecione a playlist</h5>
                    <select className="select" onChange={this.onChangePlaylistSelect}>
                        {this.state.listaName.map((item) => {
                            return <option value={item.id}>{item.name}</option>;
                        })}
                    </select>
                    <Botoes>
                        <hr/>
                        <Button variant="outline-primary" onClick={() => this.addMusicToPlaylist(trackToPlaylistId)} >Salvar Música</Button>{' '}
                        <Link to="/"><Button   variant="outline-info">Criar Playlist</Button>{' '}</Link>
                        <Link to="/Lista"><Button   variant="outline-info">Ver todas as Playlist</Button>{' '}</Link>
                    </Botoes>
                </Formulario>
                </Col>
            <Col sm md={3}></Col>
            </Row>
            </Container>
        </FlexContainer>
    }
}
export default AddMusica;