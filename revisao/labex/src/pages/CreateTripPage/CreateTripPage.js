import React from "react";
import { LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/foguete.png";
import useProtectedPage from '../../hooks/useUnprotectedPage'
import CreateTripForm from './CreateTripForm'
const CreateTripPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <CreateTripForm />
    </ScreenContainer>
  );
};

export default CreateTripPage;
