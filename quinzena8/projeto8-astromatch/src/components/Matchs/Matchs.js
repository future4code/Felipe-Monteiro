import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Matchs.css";

const GridLayout = styled.main`
  background: linear-gradient(#5667dd, #5ecbf7);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const ListaStyled = styled.div`
  border-radius: 5%;
  margin-top: 18rem;
  width: 100%;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
`;
const Fotos = styled.img`
  width: 12rem;
`;
const Icon = styled.img`
  justify-content: center;
  width: 6rem;
  margin: 10px;
`;
function Matchs() {
  const [match, setMatch] = useState([]);

  const getMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/matches"
      )
      .then((response) => setMatch(response.data.matches))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/matches"
      )
      .then((response) => {
        setMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <GridLayout>
      <Container>
        <Row>
          <Col sm md={3} lg={3}></Col>
          <Col sm={12} md={6} lg={6}>
            <ListaStyled>
              <Icon src="./tinder.png"></Icon>
              <h4 className="title">Lista de Matches</h4>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>Nome</th>
                  </tr>
                </thead>
                <tbody>
                  {match.map((item) => {
                    return (
                      <tr>
                        <td>
                          <Fotos src={item.photo}></Fotos>
                        </td>
                        <td>
                          <p>{item.name}</p>
                          <strong>bio :</strong>
                          {item.bio}
                        </td>
                        <Button variant="outline-info" className="perfil">
                          Ver perfil completo
                        </Button>{" "}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Link to="/">
                <Button variant="outline-success">Escolher perfil</Button>{" "}
              </Link>
            </ListaStyled>
          </Col>
          <Col sm md={3} lg={3}></Col>
        </Row>
      </Container>
    </GridLayout>
  );
}

export default Matchs;
