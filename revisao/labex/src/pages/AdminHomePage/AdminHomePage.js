import React from "react";
import { Add } from "@material-ui/icons";
import useProtectedPage from "../../hooks/useProtectedPage";
import Button from "@material-ui/core/Button";
import logo from "../../assets/foguete.png";
import {
  AddRecipeButton,
  LogoImage,
  ScreenContainer,
  StyledButton,
} from "./styled";
import { useHistory } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { goToHome, goToCriarViagem } from "../../routes/coordinator";
import TravelCard from "../../components/TravelCard/TravelCard";
import { BASE_URL } from "../../constants/urls";
import { goToDetalhesViagem}  from "../../routes/coordinator";

const AdminHomePage = () => {
  useProtectedPage();
  const travel = useRequestData([], `${BASE_URL}felipe/trips`);
  const history = useHistory();
  const onClickCard = (id) => {
      goToDetalhesViagem(history, id);
    };
  

  const TravelCardComponent = travel.map((travels) => {
    return (
      <TravelCard
        name={travels.name}
        description={travels.description}
        onClick={() => onClickCard(travels.id)}
      />
    );
  });

  
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      {TravelCardComponent}
      <StyledButton>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          onClick={() => goToCriarViagem(history)}
        >
          Criar Viagem
        </Button>
        <Button
          fullWidth
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => goToHome(history)}
        >
          Voltar
        </Button>
      </StyledButton>
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToCriarViagem(history)}
      >
        <Add />
      </AddRecipeButton>
    </ScreenContainer>
  );
};

export default AdminHomePage;
