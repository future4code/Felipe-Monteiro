import React, { useEffect, useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import "./EscolherPerfil.css";
import Logo from "../Logo/Logo";
import axios from "axios";

const GridLayout = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#5667dd, #5ecbf7);
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const FotoPerfil = styled.img`
  max-height: 250px;
  max-width: 18rem;
  margin: 15px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const PerfilStyled = styled.div`
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  width: 20rem;
  height: 100%;
  flex-direction: column;
  background: white;
  border-radius: 5%;
  box-shadow: 2px 5px 11px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 5px 11px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 5px 11px 3px rgba(0, 0, 0, 0.75);
`;

const InformacoesDoPerfil = styled.div`
  padding: 10px;
`;

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

export default function EscolherPerfil() {
  const [perfil, setPerfil] = useState({});

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/person"
      )
      .then((response) => setPerfil(response.data.profile))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const pegarPessoa = (value) => {
    const body = {
      id: perfil.id,
      choice: value,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
          alert("Deu Match!");
        } else {
          alert("Próximo...");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const resetar = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/clear"
      )
      .then((response) => {
        getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <GridLayout>
      <Container>
        <Row>
          <Col sm md={12} lg={3}></Col>
          <Col sm md={12} lg={6}>
            <PerfilStyled>
              <Logo />
              <FotoPerfil src={perfil.photo} />
              <InformacoesDoPerfil>
                <h5>{perfil.name}</h5>
                <hr />
                <p>
                  <strong>bio: </strong>
                  {perfil.bio}
                </p>
                <hr />
                {perfil.age}
                <strong> anos.</strong>
              </InformacoesDoPerfil>
              <Botoes>
                <Button
                  id="botao"
                  onClick={() => pegarPessoa(false)}
                  size="lg"
                  variant="outline-danger"
                >
                  X
                </Button>{" "}
                <Button
                  id="botao"
                  onClick={() => pegarPessoa(true)}
                  size="lg"
                  variant="outline-success"
                >
                  ♥
                </Button>{" "}
                <Button onClick={resetar} variant="outline-success">
                  RESETAR
                </Button>{" "}
              </Botoes>
            </PerfilStyled>
          </Col>
          <Col sm md={12} lg={3}></Col>
        </Row>
      </Container>
    </GridLayout>
  );
}
