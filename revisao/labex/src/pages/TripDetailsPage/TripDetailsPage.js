import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import TripDetailsCard from "../../components/TripDetailsCard/TripDetailsCard";
import Candidates from "../../components/Candidates/Candidates";
import { goToAreaAdmin } from "../../routes/coordinator";
import TripsCandidatesCard from "../../components/TripCandidatesCard/TripsCandidatesCard";
import { useHistory } from "react-router-dom";
import Approved from '../../components/Approved/Approved'
import { ScreenContainer } from './styled';

const TripDetailsPage = () => {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const { candidates, approved, ...details } = tripDetails;

  const getToken = () => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        auth: token,
      },
    };
  };
  const getTripDetails = async (id) => {
    const auth = getToken();
    try {
      const request = await axios.get(
        `${BASE_URL}felipe/trip/${params.id}`,
        auth
      );
      return request.data.trip;
    } catch (err) {
      return err.message;
    }
  };

  const getTripDetailsAux = () => {
    getTripDetails(params.id).then(async (res) => {
      await setTripDetails(res);
    });
  };

  useEffect(() => {
    getTripDetailsAux();
  }, []);
  
  const approvedComponents = approved && approved.map((aprovados) =>{
    return (
      <Approved aux={aprovados}/>
    );
    
  }) 

  const candidatesComponents = candidates && candidates.map((item) => {
    return (
      <TripsCandidatesCard
        candidat={item}
        id={params.id}
        refresh={getTripDetailsAux}
      />
    );
  });
  return (
    <ScreenContainer>
      <h4>Viagem</h4>
        <TripDetailsCard
        name={details.name}
        description={details.description}
        planet={details.planet}
        durationInDays={details.durationInDays}
        date={details.date}
      />
      <h4>Candidatos</h4>
      {candidatesComponents}
      <h4>Aprovados</h4>
      {approvedComponents}
    </ScreenContainer>
  );
};

export default TripDetailsPage;
