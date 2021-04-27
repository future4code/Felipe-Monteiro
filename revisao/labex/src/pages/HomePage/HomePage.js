import React from "react";
import Button from "@material-ui/core/Button";
import logo from "../../assets/foguete.png";
import { ButtonDiv, LogoImage, ScreenContainer, StyledButton } from "./styled";
import {useHistory} from 'react-router-dom'
import {goToListaViagens, goToLogin} from '../../routes/coordinator'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const HomePage = () => {
    const history = useHistory()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <StyledButton>
        <ButtonDiv>
          <Button variant="contained" color="primary" onClick={() => goToListaViagens(history)}>
            Ver Viagens
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button variant="contained" color="primary" margin="normal" onClick={() => goToLogin(history)}>
            Área de Admin
          </Button>
        </ButtonDiv>
      </StyledButton>
    </ScreenContainer>
  );
};

export default HomePage;
