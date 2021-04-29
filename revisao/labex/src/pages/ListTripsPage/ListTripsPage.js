import React from "react";
import Button from "@material-ui/core/Button";
import logo from "../../assets/foguete.png";
import { ButtonDiv, LogoImage, ScreenContainer, StyledButton } from "./styled";
import { useHistory } from "react-router-dom";
import {
  goToHome,
  goToInscreverViagem,
  goToLogin,
} from "../../routes/coordinator";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import TripDetailsCard from "../../components/TripDetailsCard/TripDetailsCard";

const ListTripsPage = () => {
  const history = useHistory();
  const travel = useRequestData([], `${BASE_URL}felipe/trips`);
  const TravelCardComponent = travel.map((travels) => {
    return (
      <TripDetailsCard
        name={travels.name}
        description={travels.description}
        planet={travels.planet}
        durationInDays={travels.durationInDays}
        date={travels.date}
      />
    );
  });
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <h2>
        Lista de Viagens{" "}
        <AirplanemodeActiveIcon color="primary" fontSize="large" />
      </h2>
      {TravelCardComponent}
      <StyledButton>
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            margin="normal"
            onClick={() => goToInscreverViagem(history)}
          >
            Inscrever-se
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToHome(history)}
          >
            Voltar
          </Button>
        </ButtonDiv>
      </StyledButton>
    </ScreenContainer>
  );
};

export default ListTripsPage;
