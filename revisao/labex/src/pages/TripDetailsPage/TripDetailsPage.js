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
const TripDetailsPage = () => {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const { candidates, approved, ...details } = tripDetails;

  const getToken = () => {
    const token = localStorage.getItem("token");
    console.log(details)
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

  /* const approvedComponents = approved && approved.map((item) =>{
    return <Approved aux={item.name}/>
  }) */

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
    <div>
      <TripDetailsCard
        name={details.name}
        description={details.description}
        planet={details.planet}
        durationInDays={details.durationInDays}
        date={details.date}
      />
       {candidatesComponents} 
        
    </div>
  );
};

export default TripDetailsPage;
