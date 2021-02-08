import React from 'react';
import {Button, Form, Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';
import { axiosConfig } from '../constants/requisicao'
import axios from 'axios';
import { BrowserRouter as Route, Link} from "react-router-dom";

const FlexContainer = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background: linear-gradient(#56ab2f, #a8e063);
`;
const Formulario = styled.div`
    background: whitesmoke;
    padding: 80px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
    -webkit-box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
    -moz-box-shadow: 3px 3px 16px 3px rgba(0,0,0,0.68);
`;
const Title = styled.div`
    margin: 20px;
`;
const Botoes = styled.div`
`;
const Logo = styled.div`

`;
 export class CreatePlayList extends React.Component {
    state = {
        inputNamePlaylist: ""
    }
    onChangPegarNome = (event) =>{
        this.setState({inputNamePlaylist: event.target.value});
    }
    criarPlaylist = () => {
    const body = {
      name: this.state.inputNamePlaylist
    };
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, axiosConfig)
      .then(() => {
        alert(`A Playlist ${this.state.inputNamePlaylist} foi criada`);
        this.setState({
          inputNamePlaylist: ''
        });
      })
      .catch((erro) => {
        alert(erro.message);
      });
    };

    render(){
        return <FlexContainer>
            <Container>
                <Row>
                <Col sm md={2}></Col>

                <Col sm md={8}>
                <Formulario>
                <Logo><img src="./fones-de-ouvido.png"></img></Logo>
                <Title><h3>Criar uma PlayList </h3></Title>
                <Form.Group className="formulario">
                    <Form.Row>
                        <Form.Label column lg={4}>
                        <h5>Nome da PlayList :</h5>
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" placeholder="Digite o nome da sua playlist aqui..." value={this.state.inputNamePlaylist} onChange={this.onChangPegarNome}/>
                        </Col>
                        
                    </Form.Row>
                </Form.Group>
                <Botoes>
                    <hr/>
                    <Button onClick={this.criarPlaylist} variant="outline-primary">Salvar PlayList</Button>{' '}
                    <Link to="/Lista"><Button  id="paginalist" variant="outline-info">Ver todas as Playlist</Button>{' '}</Link>
                </Botoes>
                
                </Formulario>
                </Col>
                <Col sm md={2}></Col>
                </Row>
            </Container>
        </FlexContainer>
    }
}
export default CreatePlayList;