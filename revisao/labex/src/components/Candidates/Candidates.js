/* import React from "react";
import { ScreenContainer } from "./styled";
import CandidateCard from "./CandidateCard";
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
const Candidates = (candidatess, id, refresh) => {

    const getToken = () => {
        const token = localStorage.getItem('token')
        
          return {
            headers: {
              auth: token,
            },
          };
        };

    const decideCandidate = async (tripId, candidateId, approved) => {
        const auth = getToken();
        const data = {approve: approved};
        try {
          const request = await axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, data, auth)
          console.log(request.data)
        } catch (err) {
          console.log(err.message)
        }
      }
  
  const candidatosComponent = candidatess.map((candidate) => {
    return <CandidateCard candidate={candidate}  />;
  });
  return { candidatosComponent };
};
export default Candidates;
 */