import React, { useState, useEffect } from "react";
import { LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/foguete.png";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { useHistory } from "react-router-dom";
import {BASE_URL} from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import getCountries from '../../services/GetCountriesAPI'
import Form from '../../components/Form/Form'
const ApplicationFormPage = () => {
  const history = useHistory();

  const trips = useRequestData([], `${BASE_URL}felipe/trips`);
  const [countries, setCountries] = useState([]);
    useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.map((country) => country.name));
    });
  }, []);
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <h4>Inscrever-se para Viagem</h4>
      <Form countries={countries} trips={trips} history={history} />
    </ScreenContainer>
  );
};

export default ApplicationFormPage;
