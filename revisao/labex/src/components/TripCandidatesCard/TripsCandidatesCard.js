import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import {
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ScreenContainer } from "./styled";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'

const TripsCandidatesCard = ({candidat, id, refresh}) => {
  const history = useHistory()
  const params = useParams()
  const idCandidate = candidat.id
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
      const request = await axios.put(`${BASE_URL}felipe/trips/${tripId}/candidates/${candidateId}/decide`, data, auth)
      console.log(request.data)
    } catch (err) {
      console.log(err.message)
    }
  }
  const decideCandidateAux = (idCandidate, approve) => {
    decideCandidate(id, idCandidate, approve).then((res) => {
      refresh();
    });
  };
    return (
      <ScreenContainer>
      <Accordion>
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header" expandIcon={<ExpandMoreIcon />}>
          <Typography align={'center'}><h3>{candidat.name}</h3></Typography>
        </AccordionSummary>
         <AccordionDetails>
          <Typography>
            <div>
              <p><h5>Nome: {candidat.name}</h5></p>
            </div>
            <div>
              <p><h5>Idade: {candidat.age}</h5></p>
            </div>
            <div>
              <p><h5>Profissão: {candidat.profession}</h5></p>
            </div>
            <div>
              <p><h5>Pais: {candidat.country}</h5></p>
            </div>
            <div>
              <p><h5>Texto Candidatura:</h5>
                {candidat.applicationText}
              </p>
            </div>
            <Button
            fullWidth
            fullWidth
            variant={'contained'}
            color={"primary"}
            onClick={() => decideCandidateAux(candidat.id, true)}
          >
            Aprovar
        </Button>
        <Button
            fullWidth
            fullWidth
            variant={'text'}
            color={"primary"}
            onClick={() => decideCandidateAux(candidat.id, false)}
          >
            Reprovar
        </Button>
             
          </Typography>
        </AccordionDetails> 
      </Accordion>
    </ScreenContainer> 
    );
}
export default TripsCandidatesCard;
